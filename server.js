const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const PORT = 3000;

// Servir les fichiers statiques depuis le répertoire 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Servir le fichier index.html à la racine
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Utiliser json-server pour simuler une API REST
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
app.use('/api', middlewares, router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
