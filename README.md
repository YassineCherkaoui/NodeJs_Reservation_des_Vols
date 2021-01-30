## Réservation des Vols

Réservation des Vols Chez SafiAir

![Réservation des Vols](https://economictimes.indiatimes.com/thumb/msid-75181333,width-1600,height-900,resizemode-4/industry/transportation/airlines-/-aviation/those-who-booked-flight-tickets-during-mar-25-apr-14-for-travel-till-may-3-can-get-refunds-govt.jpg)

## Table des matières

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table des matières</summary>
  <ol>
    <li>
      <a href="#Contexte-du-projet">Contexte du projet</a>
    </li>
    <li>
      <a href="#Modalités-pédagogiques">Modalités pédagogiques</a>
    </li>
    <li><a href="#Livrables">Livrables</a></li>
    <li><a href="#Capture-d'écran-de-l'application">Capture d'écran de l'application</a></li>
    <li><a href="#Référentiels">Référentiels</a></li>
    <li><a href="#technologies-utilisées">technologies utilisées</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#COMMENT-COURIR">COMMENT COURIR !!</a></li>
    <li><a href="#Author">Author</a></li>
  </ol>
</details>

## Contexte du projet

La société SafiAir souhaite créer une application web qui va permettre la réservation des vols via un site. Nous supposons que le client (code, nom, prénom, email, téléphone) accède à l’IHM réservation. Le client saisit la ville de départ/d’arrivé, l’heure départ /d’arrivé, la date de départ/Arrivé, et le nombre de places. Le système affiche une liste de propositions de vols sur le menu réservation, indiquant la description des vols. Si l’un des vols nécessite une escale, dans ce cas l’aéroport escale est affiché aussi. Le client choisit le vol qui lui intéresse, et demande la réservation de celui-ci. Le système vérifie la disponibilité du vol. Si le vol est disponible, un message est affiché au client « la confirmation de la réservation sera complétée avec le paiement ». Le client est ensuite redirigé vers la page de paiement. Le client reçoit un email de confirmation de sa réservation avec les détails du vol voulu Le Système enregistre par la suite le détail de la réservation dans un fichier (txt)
NB : Un Vol de doit pas dépasser 20 passagers

Travail à Faire :

• Réaliser une Application Web en Node.Js • Maquetter les interfaces graphiques avec un outil de votre choix à l'aide aussi du HTML, CSS et JavaScript, EJS • Proposez une base de données adéquate sous MySql qui répond efficacement au cahier des charges • Réaliser le nombre de page selon votre choix à fin de garantir la procédure de réservation en ligne

## Modalités pédagogiques

Travail en Binôme

Deadline 1 Février 2021

## Livrables

Lien Github de votre application web et base de données

## Capture d'écran de l'application

![home](https://github.com/YassineCherkaoui/NodeJs_Reservation_des_Vols/blob/main/Output/Home.png)
![Home_after_search](https://github.com/YassineCherkaoui/NodeJs_Reservation_des_Vols/blob/main/Output/Home_after_search.png)
![Reservation](https://github.com/YassineCherkaoui/NodeJs_Reservation_des_Vols/blob/main/Output/Reservation.png)
![Confirmation](https://github.com/YassineCherkaoui/NodeJs_Reservation_des_Vols/blob/main/Output/Confirmation.png)
![Payment](https://github.com/YassineCherkaoui/NodeJs_Reservation_des_Vols/blob/main/Output/Payment.png)
![Message_Final](https://github.com/YassineCherkaoui/NodeJs_Reservation_des_Vols/blob/main/Output/Message_Final.png)
![File_Text](https://github.com/YassineCherkaoui/NodeJs_Reservation_des_Vols/blob/main/Output/File_Text.PNG)
![Email](https://github.com/YassineCherkaoui/NodeJs_Reservation_des_Vols/blob/main/Output/Email.PNG)

## Capture d'écran de Trello

![1](https://github.com/YassineCherkaoui/NodeJs_Reservation_des_Vols/blob/main/Trello/soci%C3%A9t%C3%A9_SafiAir%20_%20Trello-1.jpg)
![2](https://github.com/YassineCherkaoui/NodeJs_Reservation_des_Vols/blob/main/Trello/soci%C3%A9t%C3%A9_SafiAir%20_%20Trello-2.jpg)
![3](https://github.com/YassineCherkaoui/NodeJs_Reservation_des_Vols/blob/main/Trello/soci%C3%A9t%C3%A9_SafiAir%20_%20Trello-3.jpg)

## Diagramme

![Diagramme de class](https://github.com/YassineCherkaoui/NodeJs_Reservation_des_Vols/blob/main/Diagramme/Diagramme_de_classe.png)

## Référentiels

Développeur⋅se web et web mobile
Concepteur⋅rice développeur⋅se d'applications

## Prérequis (technologies utilisées)

Node.js
HTML5/CSS3
JavaScript
MySQL
GIT
Pédagogie active

## License

Distributed under the MIT License. See LICENSE for more information.

## COMMENT COURIR !!

```bash
    # how to run
Pour Exécuter ce Projet, vous devez suivre ces étapes :
Étape 1: installé nodejs sur votre PC: https://nodejs.org/en/download/ .
Étape 2: Extraire le fichier.
Étape 3: Ouvrez le dossier avec Nimporte quel IDE (VScode / notepad .....)
Étape 4: installez node-module avec cette commande << npm install --save >>.
'npm install nodemailer --save'
'npm install handlebars --save'
'npm install fs --save'
```

Maintenant, les étapes suivantes comment connecter la base de données

```

Étape 5: installez Apache (Xampp / wamp).
Étape 6: Ouvrez un navigateur et accédez à l'URL "http://localhost/phpmyadmin/".
Étape 8: Créez une base de données nommant "Flight_Booking" puis cliquez sur l'onglet d'importation
Étape 9: Cliquez sur parcourir le fichier et sélectionnez le fichier "reservation_de_vols.sql qui se trouve dans le dossier
Étape 10: Cliquez sur aller.

```

```
Étape 11: Ouvrez le Terminal et appuyez sur npm start

    ## Enjoy

```

start app via https://localhost:3000/

## Author

Yassine Cherkaoui
