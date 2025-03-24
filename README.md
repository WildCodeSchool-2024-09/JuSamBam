# Wildy Gamy

# Description
Le projet "Wildy Gamy" a pour objectif de créer un site web permettant aux utilisateurs de tester l'un des jeux de la salle d'arcade "Wildy Gamy" dans un univers virtuel. Ce site vise à attirer de nouveaux clients en offrant une expérience interactive qui les incite à visiter le magasin physique.

# Objectif
1. Test de Jeu en Ligne : les utilisateurs peuvent tester un jeu de la salle d'arcade directement sur le site web. (seul Pac-Man est implanté).
2. Interface Intuitive : conception d'un site facile à naviguer avec un accès rapide au jeu.
3. Présentation des Jeux : détail des jeux disponibles à la salle d'arcade.

# Fonctionnalités
1. Offrir une expérience immersive et réaliste du jeu virtuel.
2. Créer un lien entre l'expérience en ligne et la visite en magasin.

# Installation
1. Clonez ce répertoire sur votre machine locale : `git clone https://github.com/VotreNom/nom-du-projet.git`
2. Installez les dépendances nécessaires : `npm install`
3. Exécutez la migration de la base de données : `npm run db:migrate`
4. Lancez le serveur local pour tester l'application : `npm run dev`
5. Lancer le test d'intégration pour tester l'incrémentation de la base de données : `npm run test testIntegration`
6. Lancer le test unitaire pour tester le endpoint user et pour simuler l'ajout d'un user : `npm run test testUnit`

# les ajouts
1. Ajouter plusieurs jeux de salle d'arcade au site.
2. Récupérer le score des jeux de test pour les mettre dans le classement du site. 
3. Création d'un toast pour toutes les notifications.
4. Mettre des shadows sur le logo et le titre du footer /fait.
5. Améliorer l'expérience utilisateur pour les liens du site.
6. Continue un maximum a ce focaliser sur l'accessibilité de l'utilisateur.
7. Édit pour l'user. 
8. Suppression des jeux dans la page liste de jeux.
9. Mettre en place un Easter egg.
10. Animation du pac-man pour le footer et le header (Desktop) /fait.




<!-- ### Commandes de Base

| Commande               | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `npm install`          | Installe les dépendances pour le client et le serveur                       |
| `npm run db:migrate`   | Met à jour la base de données à partir d'un schéma défini                   |
| `npm run dev`          | Démarre les deux serveurs (client et serveur) dans un seul terminal         |
| `npm run check`        | Exécute les outils de validation (linting et formatage)                     |
| `npm run test`         | Exécute les tests unitaires et d'intégration                                | -->

### Structure des Dossiers

```plaintext
my-project/
│
├── server/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   └── authActions.ts
│   │   │   │   
│   │   │   ├── user/
│   │   │   │   ├── userActions.ts
│   │   │   │   └── userRepository.ts
│   │   │   │
│   │   │   └── videogame/
│   │   │       ├── videogameAction.ts
│   │   │       └── videogameRepository.ts
│   │   ├── app.ts
│   │   ├── main.ts
│   │   └── router.ts
│   ├── database/
│   │   ├── client.ts
│   │   └── schema.sql
│   ├── tests/
│   │   ├── install.test.ts
│   │   ├── testIntegration.test.ts
│   │   └── testUnit.test.ts
│   │
│   ├── .env
│   └── .env.sample
│
└── client/
    ├── src/
    │   ├── components/
    │   │   ├── AddImageForm.tsx
    │   │   ├── ArcadeMachine.css
    │   │   ├── DecoPacman.css
    │   │   ├── DecoPacmanFooter.tsx
    │   │   ├── DecoPacmanHeader.tsx
    │   │   ├── FavoriteGame.tsx
    │   │   ├── Footer.css
    │   │   ├── Footer.tsx
    │   │   ├── Header.css
    │   │   ├── Header.tsx
    │   │   ├── LiveArcade.tsx
    │   │   ├── LiveArcade.css
    │   │   ├── LoginForm.tsx
    │   │   ├── NewgameForm.tsx
    │   │   ├── NewgameForm.tsx
    │   │   ├── Pacman.css
    │   │   ├── Pacman.tsx
    │   │   ├── Pacmangame.tsx
    │   │   ├── SubscriptionForm.css
    │   │   ├── SupscriptionForm.tsx
    │   │   └── UserForm.tsx
    │   ├── pages/
    │   │   ├── ConditionsPage.css
    │   │   ├── ConditionsPage.tsx
    │   │   ├── FavoritesGamesPage.tsx
    │   │   ├── FavoritesPage.css
    │   │   ├── GameListingPage.css
    │   │   ├── GameListingPage.tsx
    │   │   ├── LoginPage.css
    │   │   ├── LoginPage.tsx
    │   │   ├── NewGamePage.tsx
    │   │   ├── RankingPage.css
    │   │   ├── RankingPage.tsx
    │   │   ├── SubscriptionPage.tsx
    │   │   ├── UserPage.css
    │   │   └── UserPage.tsx
    │   │
    │   ├── App.css
    │   ├── App.tsx
    │   └── main.tsx
    ├── .env
    └── .env.sample
```


