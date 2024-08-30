const express = require('express');
const Spreadsheet = require('../models/spreadsheet');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const spreadsheets = await Spreadsheet.find();
    res.json(spreadsheets);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching spreadsheets' });
  }
});

router.post('/', async (req, res) => {
  try {
    const spreadsheet = new Spreadsheet({
      name: req.body.name,
      data: req.body.data,
    });
    await spreadsheet.save();
    res.json(spreadsheet);
  } catch (error) {
    res.status(400).json({ error: 'Error creating spreadsheet' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const spreadsheet = await Spreadsheet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!spreadsheet) {
      return res.status(404).json({ error: 'Spreadsheet not found' });
    }
    res.json(spreadsheet);
  } catch (error) {
    res.status(500).json({ error: 'Error updating spreadsheet' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Spreadsheet.findByIdAndDelete(req.params.id);
    res.json({ message: 'Spreadsheet deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting spreadsheet' });
  }
});

module.exports = router;