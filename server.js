const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('This message should change automatically!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});