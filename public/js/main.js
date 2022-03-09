function start(taille) {
    if (taille == undefined){
        taille = 10;
    }
    grille = new Grille(taille);
    grille.grilleMaker();
    
    //console.log(grille.grilleToString());
    grille.grilleAddRandomBombs();
    grille.grilleToHTML();
    nombremine = document.querySelector('#nb_mines_restantes');
    nombremine.innerHTML = grille.combienDeBombes();
    
    grille.LeftClickGrille();
    grille.RightClickGrille();
    
    grille.maskGrille();
}



start();

