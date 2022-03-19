/*
var jeutermine
boucle de jeu tant que jeutermine = 0

*/

function start(taille) {
    let restartKeyboard = false;
    if (taille == undefined){
        taille = 10;
    }
    grille = new Grille(taille);
    grille.grilleMaker();
    
    //console.log(grille.grilleToString());
    grille.grilleAddRandomBombs();
    grille.grilleToHTML();
    grille.nombremine = grille.combienDeBombes();
    grille.updateNombreBombeAffichage();
    
    grille.LeftClickGrille();
    grille.RightClickGrille();
    
    grille.maskGrille();
    

    

    document.addEventListener('keydown', function (event) {
        if(restartKeyboard == false){
            if (event.code === 'Space' || event.code === 'KeyR') {
                clearEventListener();
                clearTemps();
                clearGrille(); 
                start(taille);
                restartKeyboard = true;
                
            }
        }
    });
    let buttonRecommencer = document.querySelector('#btn_recommencer');
    buttonRecommencer.addEventListener('click', function(){

        clearEventListener();
        clearTemps();
        clearGrille();
        start(taille);
        


    });
    let buttonFacile = document.querySelector('#btn_facile');
    buttonFacile.addEventListener('click', function(){
        clearEventListener();
        clearTemps();
        clearGrille();
        start(10);
        
    });
    let buttonMoyen = document.querySelector('#btn_moyen');
    buttonMoyen.addEventListener('click', function(){
        clearEventListener();
        clearTemps();
        clearGrille();
        start(15);
        
    });
    let buttonDifficile = document.querySelector('#btn_difficile');
    buttonDifficile.addEventListener('click', function(){
        clearEventListener();
        clearTemps();
        clearGrille();
        start(20);
        
    });
}




let timer = setInterval(auguementerTemps, 1000);

start();

