const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const querystring = require('querystring');
const cors = require('cors');
const request = require('request');
const fetch = require('node-fetch');


// uncomment the below for proxy challenge

const leaderList = [
  {name: 'Anna', id: 'a0'},
  {name: 'Ben', id: 'b0'},
  {name: 'Clara', id: 'c0'},
  {name: 'David', id: 'd0'},
];




//generate state key for oauth request
let generateRandomString = function(length){
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const clientId = '86w7mio7m9wk2e'
const scope = 'r_basicprofile%20r_emailaddress';
const redirectUri = 'http://localhost:3000/linkedin/callback'

//state key for linkedin state cookie
const stateKey = 'linkedin_auth_state';

app.get('/api/leaders', (req, res) => {
  res.send(leaderList);
});

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use(express.static(__dirname + '/index.html'))
   .use(cors())
   .use(cookieParser());

app.get('/login', function(req, res) {
  //linkedin app key info

  // const scope = 'r_basicprofile%20r_emailaddress';
 

    const state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    res.redirect(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&scope=r_liteprofile%20r_emailaddress&redirect_uri=http://localhost:3000/linkedin/callback&state=${state}`)
   
});


app.get('/linkedin/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter
  const clientSecret = '9S1EMrv9RU0tBZxQ'
  var code = req.query.code || null;
  // console.log(code)
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;
  

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://www.linkedin.com/oauth/v2/accessToken?',
      form: {
        code: code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic' + code
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.linkedin.com/oauth/v2/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the LinkedIn API --ALL USER INFO
        let url = "https://api.linkedin.com/v2/me";
        let bearer = 'Bearer ' + access_token;
        fetch(url, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                }
        }).then(response =>response.json())
        .then(data=>{
          let firstName = data.firstName.localized.en_US;
          let lastName = data.lastName.localized.en_US;
          let country = data.lastName.preferredLocale.country;
          let language = data.lastName.preferredLocale.language;
          let id = data.id;

          res.locals = { firstName, lastName, country, language, id } ;
          console.log(res.locals)
          console.log('------------- API fetch request')
          console.log(data)
            // res.json(data.businesses);
            // console.log(data.businesses[0])
        }).catch(err=>{
            console.log("Error fetching user information from LinkedIn", err)
        });


        // use the access token to access the LinkedIn API --IMAGE
        let imageFetchURL = "https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~:playableStreams))";
        // let bearer = 'Bearer ' + access_token;
        fetch(imageFetchURL, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                }
        }).then(response =>response.json())
        .then(data=>{
          // console.log(data)
          let imageURL = data.profilePicture["displayImage~"].elements[0].identifiers[0].identifier;
          console.log('------------- API fetch request')
          console.log(imageURL)
            // res.json(data.businesses);
            // console.log(data.businesses[0])
          res.locals.imageURL = imageURL;
        }).catch(err=>{
            console.log("Error fetching image URL from LinkedIn", err)
        });




        res.cookie("access_token", access_token)

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});



// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});



app.listen(3000); //listens on port 3000 -> http://localhost:3000/

