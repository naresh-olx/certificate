const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

app.get('/noc/Ecertificate', (req, res) => {
  const certId = req.query.q;
  if (!certId) {
    return res.status(400).send('Missing certificate ID');
  }

  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/NOC/NOC25/SEM1/Ecertificates/109/noc25-hs12/Course/:certId', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'NPTEL25HS12S105370460904572065.pdf'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
