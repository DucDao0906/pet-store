const express = require('express');

const connectDB = require('./config/db');

const app = express();

//Init middlewares to parses incoming requests with JSON payloads
app.use(express.json());

//Connect DB
connectDB();

const PORT = process.env.PORT || 5000;

app.listen();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});