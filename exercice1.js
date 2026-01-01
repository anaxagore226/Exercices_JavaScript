// Exercice 1 : Le Gestionnaire de Liste de Courses Intelligent

let listeCourses = [];

let last_index = 0;

function ajouterArticle(nom, quantite, prix_unitaire) {
    last_index++;
    const article = {
        id : last_index,
        nom : nom,
        quantite : quantite,
        prix_unitaire : prix_unitaire,
        achete : false
    }
    listeCourses.push(article);
    console.log(`Article ajouté : ${quantite} x ${nom} à ${prix_unitaire}francs l'unité.`);
}

function supprimerArticle(id) {
    const index = listeCourses.findIndex(article => article.id === id);
    if (index !== -1) {
        const supprime = listeCourses.splice(index, 1)[0];
        console.log(`Article supprimé : ${supprime.nom}`);
    } else {
        console.log(`Erreur : aucun article avec l'id ${id} trouvé.`);
    }
}

function marquerCommeAchete(id) {
    const index = listeCourses.findIndex(article => article.id === id);
    if (index !== -1) {
        const article = listeCourses.find(article => article.id === id);
        article.achete = true;
        console.log(`Article marqué comme acheté : ${article.nom}`);
    } else {
        console.log(`Erreur : aucun article avec l'id ${id} trouvé.`)
    }
}

function afficherListe() {
    if (listeCourses.length === 0) {
        console.log("La liste de courses est vide.");
        return;
    }
    for (const article of listeCourses) {
        const statut = article.achete ? "[X]" : "[ ]";
        console.log(`${statut} ${article.quantite}x ${article.nom} à ${article.prixUnitaire}francs`);
        console.table(listeCourses);
    }
}

function calculerTotal() {
    let total = 0;
    for (const article of listeCourses) {
        if (article.achete) {
            total += article.quantite * article.prix_unitaire;
        }
    }
    return total;
}

ajouterArticle("Lait", 2, 1.2);
ajouterArticle("Pain", 1, 0.8);
afficherListe();
marquerCommeAchete(1);
console.log("Total payé : " + calculerTotal() + "francs");
supprimerArticle(2);
afficherListe();