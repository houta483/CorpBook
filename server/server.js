const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const taskController = require('./controllers/TaskControllers')

const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://houta483:Pitbull92929@cluster0-42vnx.gcp.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

const userRouter = express.Router();

userRouter.post('/', taskController.createAccount, (req, res) => {
  res.status(200).send(res.locals.doc);
});

userRouter.get('/:name', taskController.getUser, (req, res) => {
  res.status(200).send(res.locals.doc)
});

userRouter.patch('/:name', taskController.changeUser, (req, res) => {
  res.status(200).end();
})


userRouter.delete('/:name', taskController.deleteUser, (req, res) => {
  res.status(200).end();
})

app.use('/user', userRouter)

app.use((err, req, res, next) => 
  res.status(418).end());



  app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
  });