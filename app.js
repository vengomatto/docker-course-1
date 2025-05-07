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

app.get('/k8snode', (req, res) => {
  if (!process.env.NODE_NAME) {
    res.status(500).send('Error: NODE_NAME environment variable is not set!');
    console.error('Error: NODE_NAME environment variable is not set!')
    return;
  }
  res.send(`<h2>Hi I'm ${os.hostname()} running on ${process.env.NODE_NAME}!</h2>`);
  console.log(`uela! I'm ${os.hostname()} running on ${process.env.NODE_NAME}`)
});

app.listen(3000);
