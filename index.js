const express = require('express');
const app = express();

app.get('/healthz', function (req, res) {
  res.status(200).send('OK');
});

app.get('/', function (req, res) {
  res.status(502).json({ error: '502 from backend' });
});

app.listen(3000, function () {
  console.log('Example listening on port 3000!');
});
