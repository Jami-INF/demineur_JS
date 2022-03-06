function start() {
    grille = new Grille(20);
    grille.grilleMaker();
    grille.grilleAddRandomBombsNB(90);
    console.log(grille.grilleToString());

    elements = grille.grilleToHTML();

    nombremine = document.querySelector('#nb_mines_restantes');
    nombremine.innerHTML = grille.combienDeBombes();
    grille.LeftClickGrille();
    grille.RightClickGrille();
    grille.maskGrille();
}

function clearGrille(){
    let grille = document.getElementById('grille');
    grille.parentNode. removeChild(grille);
}

start();

