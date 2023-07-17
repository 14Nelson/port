const express = require('express');
const app = express();


app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html");
})

app.get('/contat', function(req, res) {
  res.send('contat!!!!');
})
app.use(express.static('public'));
let PORT = 3000;
app.listen(PORT, function() {
  console.log('Listem in 3000');
})
