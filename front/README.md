README Ocean Zéro : Le game

But du jeu :
Le but du jeu est d'arriver à arreter la génération de déchets et réduire le nombre total de déchets total à zéro.
Pour y arriver, il faut d'abord cliquer sur le déchet afin de gagner des points d'actions ; ces points d'actions sont ensuite utilisés pour acheter des actions qui augmentent le nombre de déchets rammassés ou qui diminuent la génération de dechets selon l'action utilisée. Le pouvoir de ces actions peut-être maximaliser en achetant les powers-ups associés à celles-ci. 

Composants du jeu :

Compteurs (de droite à gauche) :
Total déchets : nombre de déchets total / Compteur principal à ramener à zéro
Pseudo du joueur (entré dans la fenêtre de départ)
Temps écoulé : temps total écoulé depuis le lancement du jeu
Déchets jetés / sec : nombre de déchets qui s'ajoute au total déchets par seconde
Points d'actions : points gagnés en cliquant sur le déchet / en débloquant des actions = monnaie d'échange pour acheter des actions ou powers-ups
Déchets ramassés / sec : nombre de déchets qui se soustrait du total déchets chaque seconde / calculé selon les actions et powers-ups débloqués
Points gagnés / sec : nombre de points gagnés par seconde / calculé selon les actions et powers-ups débloqués

Médailles : badges grisés ou colorées selon le niveau de progression dans le jeu / 4 badges à débloquer (début, bronze, argent, or)

Fenêtre plage : fenêtre rassemblant tous les éléments du jeu ; le tas de déchets à faire disparaitre, les actions utilisées et le nombre de chacunes d'entre elles. Au fur et à mesure de l'avancement, le graphisme de cette fenêtre évolue et laisse place à un océan de en plus bleu, les déchets laissent place aux poissons.

Fenêtre Agis ! : fenêtre rassemblant toutes les actions et powers-ups du jeu. A coté de chaque action, le bouton info explique le pouvoir et le prix de chaque action et power-up se trouvant sur la même ligne. Les actions peuvent être achetées à l'infini (le nombre s'actualise à coté de l'icone s'y rapportant sur la plage) alors que les powers-ups ne sont disponibles qu'une seule fois. Une fois achetés, ceux-ci laissent place à une icone "check" qui indique que celui-ci a été acheté.

Pied de page :
Recommencer : permet de redémarrer le jeu
Classement : récapitulatif des dix meilleurs scores (basés sur les temps de jeu)
Agissez ! : récapitulatif des liens proposés dans les fenêtres d'ouvertures de chaque actions lorsqu'elle est achetée pour la première fois dans la partie
H2Code : bouton "cheat" qui envoie 1 000 000 000 de points d'actions chaque fois qu'il est cliqué

Le code :


