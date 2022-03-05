function start() {
    grille = new Grille(10);
    grille.grilleMaker();
    grille.grilleAddRandomBombsNB(7);
    console.log(grille.grilleToString());

    elements = grille.grilleToHTML();

    nombremine = document.querySelector('#nb_mines_restantes');
    nombremine.innerHTML = grille.combienDeBombes();
    grille.LeftClickGrille();
    grille.RightClickGrille();
}

function clearGrille(){
    let grille = document.getElementById('grille');
    grille.parentNode. removeChild(grille);
}

start();

