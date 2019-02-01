# README OCEAN'S CLEANER GAME

## But du jeu
Le but du jeu est d'arriver à arrêter la génération de déchets et réduire le nombre total de déchets à zéro.
Pour y arriver, il faut d'abord cliquer sur le déchet afin de gagner des points d'actions ; ces points d'actions sont ensuite utilisés pour acheter des actions qui augmentent le nombre de déchets ramassés ou qui diminuent la génération de déchets selon l'action utilisée. Le pouvoir de ces actions peut être maximisé en achetant les powers-ups associés à celles-ci.


## Composants du jeu
Compteurs (de droite à gauche) :
- Total déchets : nombre de déchets total / Compteur principal à ramener à zéro.
- Pseudo du joueur (entré dans la fenêtre de départ).
- Temps écoulé : temps total écoulé depuis le lancement du jeu.
- Déchets jetés / sec : nombre de déchets qui s'ajoute au total déchets par seconde.
- Points d'actions : points gagnés en cliquant sur le déchet / en débloquant des actions = monnaie d'échange pour acheter des actions ou powers-ups.
- Déchets ramassés / sec : nombre de déchets qui se soustrait du total déchets chaque seconde / calculé selon les actions et powers-ups débloqués.
- Points gagnés / sec : nombre de points gagnés par seconde / calculé selon les actions et powers-ups débloqués.
- Médailles : badges grisés ou colorés selon le niveau de progression dans le jeu / 4 badges à débloquer (début, bronze, argent, or).
- Fenêtre plage : fenêtre rassemblant tous les éléments du jeu ; le tas de déchets à faire disparaître, les actions utilisées et le nombre de chacunes d'entre elles. Au fur et à mesure de l'avancement, le graphisme de cette fenêtre évolue et laisse place à un océan de plus en plus bleu, les déchets laissent place aux poissons.
- Fenêtre Agis ! : fenêtre rassemblant toutes les actions et powers-ups du jeu. À côté de chaque action, le bouton info explique le pouvoir et le prix de chaque action et power-up se trouvant sur la même ligne. Les actions peuvent être achetées à l'infini (le nombre s'actualise à coté de l'icone s'y rapportant sur la plage) alors que les powers-ups ne sont disponibles qu'une seule fois. Une fois achetés, ceux-ci laissent place à une icône "check" qui indique que celui-ci a été acheté.

Pied de page :

- Recommencer : permet de redémarrer le jeu.
- Classement : récapitulatif des dix meilleurs scores (basés sur les temps de jeu).
- Agissez ! : récapitulatif des liens proposés dans les fenêtres d'ouvertures de chaque actions lorsqu'elle est achetée pour la première fois dans la partie.
- H2Code : bouton "cheat" qui envoie 1 000 000 000 de points d'actions chaque fois qu'il est cliqué.

##  Technologies utilisées
- React / Redux
- Javascript ES6
- HTML5
- Sass
- NodeJS
- MySQL
- Express
- Reactstrap


##  Navigateurs supportés
Ce jeu est optimisé pour Google Chrome, Mozilla Firefox, Opera et Safari.


##  Accessibilité
Ce jeu est optimisé pour les résolutions d'écrans de type : iphone 6/7/8, Ipad et Web.


##  Installation du projet
Pour installer localement le projet il faut:

1. Cloner le repository: https://github.com/WildCodeSchool/bordeaux-0918-js-surfrider.git

2. Installer les dépendances du back:
	cd back/
	npm install

3. Installer les dépendances du front:
	cd front/
	npm install

Pour lancer l’application en mode développement il faut d’abord lancer le back:
```bash
cd back/
npm start
```
et ensuite le front:
```bash
cd front/
npm start
```
Une fois les commandes exécutées l’application sera accessible depuis le navigateur à l’adresse: http://localhost:3000/

L’application se rechargera à chaque fois qu’une modification est faite sur l’un des fichiers sources.


## Déploiement
Pour construire les artefacts utiles au déploiement du projet tapez la commande suivante dans le terminal: npm run build

Pour la création du bundle, create-react-app va compresser et optimiser les fichiers pour obtenir les meilleures performances possibles.


## Fichiers de configuration pour accéder à la base de données
L’accès à la base de données doit être configuré aussi bien dans le back que dans le front.

Back:
Dans back/routes créer un fichier config.js structuré comme suit:

```bash
import mysql from 'mysql';

const connection = mysql.createConnection({
	host: insérer l’adresse IP du serveur,
	port: indiquer la porte à utiliser,
	user: identifiant de votre base de données MySQL,
	password: mot de passe de votre base de données MySQL,
	database: nom de votre base de données MySQL,
});

module.exports = connection;
```

Front:
Il faut créer une variable d’environnement qui contiendra l’adresse IP du serveur et qui sera utilisée dans tous les composants du front qui communiquent avec la base de données. De telle manière si l’adresse du serveur change il suffit de mettre à jour la variable d’environnement pour que le nouvel IP soit disponible dans tous les composants.

Les étapes à suivre sont les suivantes:
- Créer un fichier .env dans front/ avec les informations suivantes:
- REACT_APP_API_URL = adresse IP du serveur
- REACT_APP_API_URL est intégré dans la constante varServer, qui permet de stocker l'URL.
- Importer varServer dans les composants qui communiquent avec la base de données et l’utiliser en substitution de l’adresse Ip en dur


## Routes API
Le projet dispose de 4 routes définies dans back/routes/index.js

**Route GET** http://adresse_serveur/api/players/ => Récupère toutes les données des utilisateurs

**Route POST** http://adresse_serveur/api/players/ => Enregistre le score et les statistiques d’un joueur dans la base de données. Cette route nécessite des paramètres de type req.body suivants:
```bash
{
	pseudo: '',
	game_time: '',
	click_total: '',
	volunteer_total: '',
	ocean_initiative_total: '',
	recycling_center_total: '',
	citizen_action_total: '',
	law_total: '',
	technologic_innovation_total: '',
}
```

**Route GET** http://adresse_serveur/api/players/asc => Récupère les pseudos et le temps des 10 meilleurs joueurs (ordre croissant)

**Route GET** http://adresse_serveur/api/players/score => Récupère le classement d’un joueur en fonction du temps réalisé. En cas de temps identique la différence se fait suivant le nombre de clics. Cette route nécessite de trois paramètres de type req.query:
```bash
http://adresse_serveur/api/players/score?pseudo=${pseudo}&clic=${clickCounter}&temps=${seconds.format('HH:mm:ss')}`
```

## Modification des données du jeu	 	 	 	
Les valeurs numériques (valeurs initiales du jeu, coût et portée des différentes actions, coût et portée des power-ups) des différents éléments du jeu sont modifiables dans le fichier: front/src/reducers/constants.js

Les textes contenus dans les fenêtres qui apparaissent quand une action est débloquée sont modifiables dans le fichier: front/src/reducers/contentModals.js
Les liens contenus dans ce fichier sont ceux qui apparaissent dans la fenêtre “Agissez” située en bas de page

Les textes contenus dans les fenêtres fournissant des informations pour chaque type d’action sont modifiables dans le fichier: front/src/reducers/contentPopHover.js

Les titres des power-ups sont modifiables dans le fichier:
front/src/reducers/constantPowerUp.js

La liste des pseudonymes prohibés est modifiable dans le fichier:
front/src/reducers/bannedWords.js


##  Arborescence de l’application
```bash
surfrider-app/
	|-- README.md
	|-- .gitignore
	|-- .yo-rc.json
	|-- back
	|-- node_modules/
	|-- bin
	| |-- start
	|-- forever
	| |-- prod.json
	|-- routes
	| |-- conf.js
	| |-- index.js
	|-- app.js
	|-- .babelrc
	|-- .eslintrc
	|-- package.json
	|-- package-lock.json
|-- front
|-- node_modules/
|-- package-lock.json
|-- package.json
|-- public
| |-- favicon.ico
| |-- font (contient les polices utilisées dans le scss)
| |-- images (contient les images utilisées dans le scss)
| |-- index.html
| `-- manifest.json
`-- src
|-- App.jsx
|-- App.scss
|-- actions (contient les actions redux)
|-- components
| |-- BestScore.jsx
| |-- BestScore.scss
| |-- Footer.jsx
| |-- Footer.scss
| |-- GameActions.jsx
| |-- GameActions.scss
| |-- Header.jsx
| |-- Header.scss
| |-- Info.jsx
| |-- Info.scss
| |-- Informations.jsx
| |-- Layout.jsx
| |-- Layout.scss
| `-- MyLocalStorage.jsx
|-- constants
| `-- index.js
|-- containers
| |-- BadgesNotifications.jsx
| |-- BtnAddPoints.jsx
| |-- BtnAddPointsCheating.css
| |-- BtnAddPointsCheating.jsx
| |-- InitialStat.jsx
| |-- InitialStat.scss
| |-- ScreenPlay.jsx
| |-- ScreenPlay.scss
| |-- TemplateModal.scss
| |-- TemplateModalActions.jsx
| |-- TemplateModalVolunteer.jsx
| |-- Timer.jsx
| |-- infoPopHover
| | |-- PopHover.jsx
| | `-- PopHover.scss
| `-- powerUps
| |-- PowerClickTemplate.jsx
| `-- PowerUpsTemplate.jsx
|-- img (contient les images utilisées dans les composants)
|-- index.js
|-- index.scss
`-- reducers (contient les reducers de redux)
```

##  Contributeurs
Ce jeu a été réalisé par:
- [Manon BURON](https://github.com/ManonBn),
- [Anais MILTENBERGER](https://github.com/AnaMilten),
- [Lucie GENEST](https://github.com/luciegst),
- [Robert BARAKAT](https://github.com/robertbarakat?tab=repositories),
- [Clément BESSONNET](https://github.com/clembesso),
- [Julien LATAPPY](https://github.com/JulienLatappy), 
- [Jonathan ORILLARD](https://github.com/Jonathanwcs)












