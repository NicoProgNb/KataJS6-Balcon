// =====================================================
// Kata JS 6 — Mon balcon
// Suis les TODO dans l'ordre. La constante plantes vient de plantes.js.
// =====================================================

// ---------- PARTIE 1 : les fonctions qui CALCULENT ----------
// Elles reçoivent des données et RETOURNENT un résultat.
// Elles ne touchent pas à la page.

// TODO 1 — compterAArroser(liste)
// Retourne le nombre de plantes de la liste dont aArroser vaut true.
const compterAArroser = (liste) => {
    // Je l'ai écrit en fléché par habitude
    let compteur = 0

    liste.forEach((plante) => {
        if (plante.aArroser === true) {
            compteur++
        }
    })
    return compteur
}

// Vérifie dans la console avant de passer à la suite :
// console.log(compterAArroser(plantes)) // doit afficher 4
console.log(compterAArroser(plantes))

// TODO 2 — filtrerParLieu(liste, lieu)
// Retourne un NOUVEAU tableau avec seulement les plantes dont le lieu
// est égal au paramètre lieu ("intérieur" ou "extérieur").
function filtrerParLieu(liste, lieu) {
    const resultat = []

    liste.forEach((plante) => {
        if (plante.lieu === lieu) {
            resultat.push(plante)
        }
    })
    return resultat
}
// console.log(filtrerParLieu(plantes, "intérieur")) // doit afficher 4 plantes
console.log(filtrerParLieu(plantes, "intérieur"))

// ---------- PARTIE 2 : les fonctions qui AFFICHENT ----------
// Elles modifient la page. Elles ne retournent rien.

// TODO 3 — afficherPlantes(liste)
// 1. Vide la liste <ul id="liste">
// 2. Pour chaque plante, crée un <li> qui contient l'emoji puis le nom
// 3. Si la plante est à arroser, ajoute au <li> la classe "a-arroser"
// 4. Mets à jour <p id="compteur"> : « 4 plantes à arroser sur 8 »
//    (utilise compterAArroser, ne recompte pas ici)
function afficherPlantes(liste) {
    const ul = document.getElementById("liste")
    const compteur = document.getElementById("compteur")

    // Vide la liste
    ul.textContent = ""

    liste.forEach((plante) => {
        const li = document.createElement("li")
        li.textContent = `${plante.emoji} ${plante.nom}`
        if (plante.aArroser === true) {
            li.classList.add("a-arroser")
        }
        ul.appendChild(li)
    })

    // MAJ du compteur des plantes à arroser
    compteur.textContent = `${compterAArroser(liste)} plantes à arroser sur ${liste.length}`
}

// TODO 4 — Au chargement de la page, affiche toutes les plantes.
afficherPlantes(plantes)
// ---------- PARTIE 3 : les clics ----------

// TODO 5 — Les trois boutons de filtre
// Au clic sur « Intérieur » : affiche seulement les plantes d'intérieur.
// Au clic sur « Extérieur » : seulement celles d'extérieur.
// Au clic sur « Toutes » : toutes les plantes.
// Les gestionnaires sont des fonctions fléchées : () => { ... }

const btnToutes = document.getElementById("btn-toutes")
const btnInterieur = document.getElementById("btn-interieur")
const btnExterieur = document.getElementById("btn-exterieur")

btnToutes.addEventListener("click", () => {
    afficherPlantes(plantes)
    activerBouton(btnToutes)
})

btnInterieur.addEventListener("click", () => {
    const resultat = filtrerParLieu(plantes, "intérieur")
    afficherPlantes(resultat)
    activerBouton(btnInterieur)
})

btnExterieur.addEventListener("click", () => {
    const resultat = filtrerParLieu(plantes, "extérieur")
    afficherPlantes(resultat)
    activerBouton(btnExterieur)
})

// TODO 6 — Le bouton actif
// Le bouton cliqué prend la classe "actif", les deux autres la perdent.

// Exemple pris sur Adaquiz avec le .cache des écrans
const activerBouton = (bouton) => {
    btnToutes.classList.remove("actif")
    btnInterieur.classList.remove("actif")
    btnExterieur.classList.remove("actif")
    bouton.classList.add("actif")
}

btnToutes.addEventListener("click", () => {
    activerBouton(btnToutes)
})
btnInterieur.addEventListener("click", () => {
    activerBouton(btnInterieur)
})
btnExterieur.addEventListener("click", () => {
    activerBouton(btnExterieur)
})


// =====================================================
// Questions de recul (réponds en commentaire ici)
//
// 1. Avec Jest (tests unitaire), on peut tester compterAArroser(), filtrerParLieu(), afficherPLantes(). 
// Je ne testerai pas ce qui fait modifier le CSS (ex : activerBouton() ) car il faut pouvoir afficher des données dans la console. 
//
// 2. A chaque fois que l'on clique sur un bouton, ça ajoute à la liste les plantes. Ce qui créer beaucoup de doublons inutiles. 
//
// 3. plantes.js sert de conteneur data, comme un json. Donc si on lance script.js sans qu'il connaisse les données à récupérer dans les data, il ne peut pas executer les fonctions. 
// On mets la banque de donnée, puis, on les utilise. Comme pour une constante/variable, il faut la créer avant de l'utiliser. 
// 
// =====================================================
