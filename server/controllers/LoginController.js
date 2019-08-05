const LoginController = {


    login(req, res, next) {
        //linkedin app key info 
        let generateRandomString = function(length){
            let text = '';
            let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };

        const clientId = '86w7mio7m9wk2e'
        const redirectUri = 'http://localhost:3000/linkedin/callback'

        //state key for linkedin state cookie
        const stateKey = 'linkedin_auth_state';

        const state = generateRandomString(16);
        res.cookie(stateKey, state);

        // your application requests authorization
        res.redirect(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&scope=r_liteprofile%20r_emailaddress&redirect_uri=http://localhost:3000/linkedin/callback&state=${state}`)
        
    },

    loginToHome(req, res, next){
       // res.json(res.locals.doc);
        res.redirect('/');
    }

}




module.exports = LoginController;