const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000; 

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Serveur backend fonctionnel !");
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});
