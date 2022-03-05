grille = new Grille(10);
grille.grilleMaker();
grille.grilleAddRandomBombs(5);
console.log(grille.grilleToString());
elements = grille.grilleToHTML();
console.log(elements);
document.createElement(elements);