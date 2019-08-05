// Language, profile picture, unique ID

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required']
  },  
  ProfilePicture: {
    type: String,
    required: [false]
  },
  CurrentPosition: {
    type: String,
  },
  MyersBriggs: {
    type: String
  },
  TemperamentTest: {
    type: String
  },
  AttitudeTest: {
    type: String
  },
  KolbeTest: {
    type: String
  },
  PastCompanies: {
    type: String,
  },
  Education: {
    type: String
  },
  LinkedInURL: {
    type: String
  },
  InstagramURL: {
    type: String
  },
  TwitterURL: {
    type: String
  },
  Country: {
    type: String,
  },
  Language: {
    type: String,
  },
  ID: {
    type: String
  }, 
  ICanTeachYou: {
    type: String
  },
  AskMeAbout: {
    type: String
  },
  WeirdThingIKnowAboutSomeoneInTheOffice: {
    type: String
  }
})

module.exports = mongoose.model("profile", profileSchema)

