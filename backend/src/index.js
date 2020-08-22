var app = require('express')();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname.concat('/pages/index.html'))
});

http.listen(3000, () => {
  console.log('Listening on *:3000');
});