const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./Routes/routes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Configuration MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connecté à MongoDB'))
.catch(err => console.error('Erreur de connexion MongoDB:', err));

// Routes
app.use('/api/tasks', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});