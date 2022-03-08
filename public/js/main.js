function start() {
    let xSpawn, ySpawn;
    grille = new Grille(20);
    grille.grilleMaker();
    console.log(grille.grilleToString());
    grille.grilleAddRandomBombs();
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

