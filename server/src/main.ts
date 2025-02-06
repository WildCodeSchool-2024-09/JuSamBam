// Charger les variables d'environnement à partir du fichier .env
import "dotenv/config";

// Vérifier la connexion à la base de données
// Remarque : Ceci est optionnel et peut être supprimé si la connexion
// à la base de données n'est pas nécessaire lors du démarrage de l'application
import "../database/checkConnection";

// Importer l'application Express depuis ./app
import app from "./app";

// Obtenir le port à partir des variables d'environnement
const port = process.env.APP_PORT;

// Démarrer le serveur et écouter sur le port spécifié
app
  .listen(port, () => {
    console.info(`Le serveur écoute sur le port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Erreur :", err.message);
  });
