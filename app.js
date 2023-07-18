const express = require('express');
const path = require('path');
const app = express();

// Configuração para servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+"/index.html"));
});

app.get('/contat', function(req, res) {
  res.send('contact!!');
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
