const express = require('express');
const  app = express();
const authentication = require('./jwt/verifyToken')
const { db } = require('./config/db.config.js');

const signUp = require('./signupAPi/signup')
const login = require('./login/login')
const getAllUser = require('./getAllUser/getAllUserApi')
require('dotenv').config

app.use(express.json())

db.sequelize.sync({ force: false }).then(() => {
  console.log('data had created')
});

app.get('/', (req, res) => {
  console.log(req.headers)
})

app.post('/api/signUp', signUp);

app.post('/api/login', login);

app.get('/api/getAllUser', authentication, getAllUser)

app.listen(3000)