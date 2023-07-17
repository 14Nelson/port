const express = require('express');
const path = require('path');
const app = express();

// Configuração para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'port', 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+"/index.html"));
});

app.get('/contat', function(req, res) {
  res.send('contat!!!!');
})
app.use(express.static('public'));
let PORT = 3000;
app.listen(PORT, function() {
  console.log('Listem in 3000');
})
