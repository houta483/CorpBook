// Language, profile picture, unique ID

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'FirstName is required']
  },  
  lastName: {
    type: String,
    required: [true, 'LastName is required']
  }, 
  country: {
    type: String,
    required: [false]
  }, 
  language: {
    type: String,
    required: [false]
  }, 
  id: {
    type: String,
    required: [false]
  }, 
  imageURL: {
    type: String,
    required: [false]
  }
  // ProfilePicture: {
  //   type: String,
  //   required: [false]
  // },
  // CurrentPosition: {
  //   type: String,
  // },
  // PastCompanies: {
  //   type: String,
  // },
  // Education: {
  //   type: String
  // },
  // LinkedInURL: {
  //   type: String
  // },
  // InstagramURL: {
  //   type: String
  // },
  // TwitterURL: {
  //   type: String
  // },
  // Country: {
  //   type: String,
  // },
  // Language: {
  //   type: String,
  // },
  // ID: {
  //   type: String
  // }, 
  // ICanTeachYou: {
  //   type: String
  // },
  // AskMeAbout: {
  //   type: String
  // },
  // WeirdThingIKnowAboutSomeoneInTheOffice: {
  //   type: String
  // }

})

module.exports = mongoose.model("profile", profileSchema)

