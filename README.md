**Questions de recul**

**1 - Laquelle de tes fonctions pourrait-on tester avec Jest, et laquelle non ? Pourquoi ?**
>> Avec Jest (tests unitaire), on peut tester compterAArroser(), filtrerParLieu(), afficherPLantes(). 
Je ne testerai pas ce qui fait modifier le CSS (ex : activerBouton() ) car il faut pouvoir afficher des données dans la console. 

**2 - Dans afficherPlantes, que se passe-t-il si tu oublies de vider la liste au début ? Essaie, clique plusieurs fois, et décris ce que tu vois.**
>> A chaque fois que l'on clique sur un bouton, ça ajoute à la liste les plantes. Ce qui créer beaucoup de doublons inutiles. 

**3 - Que se passe-t-il si tu inverses l'ordre des deux balises <script> dans index.html ? Lis le message de la console et explique-le.**
>> plantes.js sert de conteneur data, comme un json. Donc si on lance script.js sans qu'il connaisse les données à récupérer dans les data, il ne peut pas executer les fonctions. 
On mets la banque de donnée, puis, on les utilise. Comme pour une constante/variable, il faut la créer avant de l'utiliser. 
 
