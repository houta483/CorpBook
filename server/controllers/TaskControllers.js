const User = require("../models/userSchema");

const TaskController = {
  createAccount(req, res, next) {
    User.create(req.body, (err, doc) => {
      if (err) {
        next(err);
      } else {
        console.log('it works')
        res.locals.doc = doc
        next();
      }
    })
  },

  getUser(req, res, next) {
    const { name } = req.params;

    User.find({ username: name }, (err, doc) => {
      if (err || !doc[0]) {
        next('Cannot get user');
      } else {
        res.locals.doc = doc;
        next();
      }
    })
  },

  changeUser(req, res, next) {
    const { name } = req.params;

    User.update({ username: name }, req.body,(err, doc) => {
      if (err || !doc.n) {
        next('Cannot update user');
      } else {
        next();
      }
    })
  },

  deleteUser(req, res, next) {
    const { name } = req.params;

    User.deleteOne({ username: name }, (err, doc) => {
      if (err || !doc.deletedCount) {
        next('Could not delete account'); 
      } else {
        next();
      }
    })
  },
};

module.exports = TaskController;