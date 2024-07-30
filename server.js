const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('This message has been changed yet again!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});