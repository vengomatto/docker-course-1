const express = require('express');
const path = require('path')

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

app.use(express.static('public'));
app.get('/html', (req, res) => {
  res.sendFile("sample_page.html", { root: __dirname });
  console.log("sample html page rendered")
});


app.listen(3000);
