import React, { useState } from 'react';

function SpreadsheetGrid({ spreadsheets }) {
  const [selectedSpreadsheet, setSelectedSpreadsheet] = useState(null);

  const handleSpreadsheetClick = (spreadsheet) => {
    setSelectedSpreadsheet(spreadsheet);
  };

  return (
    <div>
      <h2>Spreadsheets</h2>
      <ul>
        {spreadsheets.map((spreadsheet) => (
          <li key={spreadsheet._id} onClick={() => handleSpreadsheetClick(spreadsheet)}>
            {spreadsheet.name}
          </li>
        ))}
      </ul>
      {selectedSpreadsheet && (
        <div>
          <h2>{selectedSpreadsheet.name}</h2>
          {/* Render the selected spreadsheet's data here */}
        </div>
      )}
    </div>
  );
}

export default SpreadsheetGrid;