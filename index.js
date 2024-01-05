// index.js
const express = require('express')
const app = express()
const PORT = 4000
const path = require('path');

app.get('/home', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app
