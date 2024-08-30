import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SpreadsheetGrid from './components/SpreadsheetGrid';

function App() {
  const [spreadsheets, setSpreadsheets] = useState([]);

  useEffect(() => {
    const fetchSpreadsheets = async () => {
      try {
        const response = await axios.get('/spreadsheets');
        setSpreadsheets(response.data);
      } catch (error) {
        console.error('Error fetching spreadsheets:', error);
      }
    };
    fetchSpreadsheets();
  }, []);

  return (
    <div className="App">
      <h1>Excel Clone</h1>
      <SpreadsheetGrid spreadsheets={spreadsheets} />
    </div>
  );
}

export default App;