const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const spreadsheetRoutes = require('./routes/spreadsheets');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/excel-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/spreadsheets', spreadsheetRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});