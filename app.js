require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const serverConfig = require('./knexfile');

const app = express();
const PORT = serverConfig.port;
const middlewares = require('./controllers/middlewares')

//middlewares
app.use(morgan('dev'));
app.use('/', middlewares.cors),
app.use('/api/', middlewares.checkApiKey);

app.get('/', (req, res) => {
    return res.status(200).send(`Gods Of The Arena Backend - ${process.env.NODE_ENV}`);
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is listening on ${PORT}`)
});