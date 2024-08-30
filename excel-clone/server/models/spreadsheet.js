const mongoose = require('mongoose');

const spreadsheetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('Spreadsheet', spreadsheetSchema);