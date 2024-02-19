const express = require('express');
const rootRouter = require ('./routes');
const cors = require('cors');
const UserController = require ('./controllers/user.controller');

//const { errorHandler } = require('./errorHandler.js');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/', rootRouter);

//app.use(errorHandler);


module.exports = app;