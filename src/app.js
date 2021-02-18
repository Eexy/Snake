const path = require('path');
const express = require('express');
require('dotenv').config();

const app = express();

const PORT =  process.env.PORT || 3000;

// Setting public directory
const publicDir = path.join(__dirname, '/public'); 
app.use(express.static(publicDir));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});