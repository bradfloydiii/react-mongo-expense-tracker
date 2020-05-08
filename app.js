const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
// const colors = require('colors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

// connect to MongoDB account
connectDB();

const app = express();

// routes
const transactions = require('./routes/transactions');
app.use('/api/v1/transactions', transactions);

// middleware
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
