'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  let random = Math.random();
  console.log(`process pid: ${process.pid}, random is ${random}`);
  res.send(`Hello World ${random}`);
});

app.listen(PORT, HOST);
console.log(`Running process pid ${process.pid} on http://${HOST}:${PORT}`);