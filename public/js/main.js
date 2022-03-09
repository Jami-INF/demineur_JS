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
    document.addEventListener('keydown', function (event) {
        if (event.code === 'Space' || event.code === 'KeyR') {
            clearGrille();
            start(taille);
        }
      });
}

let buttonRecommencer = document.querySelector('#btn_recommencer');
buttonRecommencer.addEventListener('click', function(){
    clearGrille();
    start();
});
let buttonFacile = document.querySelector('#btn_facile');
buttonFacile.addEventListener('click', function(){
    clearGrille();
    start(10);
});
let buttonMoyen = document.querySelector('#btn_moyen');
buttonMoyen.addEventListener('click', function(){
    clearGrille();
    start(15);
});
let buttonDifficile = document.querySelector('#btn_difficile');
buttonDifficile.addEventListener('click', function(){
    clearGrille();
    start(20);
});


start();

