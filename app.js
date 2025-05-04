const os = require('os');
const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

app.get('/html', (req, res) => {
  res.sendFile("sample_page.html", { root: __dirname });
  console.log("ciao! sample html page rendered")
});

app.get('/hostname', (req, res) => {
  res.send(`<h2>Hi I'm ${os.hostname()}!</h2>`);
  console.log(`uela! I'm ${os.hostname()}`)
});

app.listen(3000);
