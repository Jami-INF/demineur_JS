class Box{
    id;
    etat;//0 = vide, 1=bombe
    value;
    decouvert;
    drapeau;
    y;
    x;
    constructor(id,etat,value, decouvert, y,x){
        this.id = id;
        this.etat = etat;
        this.value = value;
        this.decouvert = decouvert;
        this.drapeau = 0;
        this.y = y;
        this.x = x;
    }  
    


}
function switchEtat(){//inverse l'état de la box
    if(this.etat == 0){
        this.etat = 1;
    }else{
        this.etat = 0;
    }
}
function grilleUpdateBox(box){//modifie la valeur de la box
    let boxHTML = document.getElementById(box.id);
    //boxHTML.setAttribute('etat', box.etat);
    if (box.decouvert != undefined)
        boxHTML.setAttribute('decouvert', box.decouvert);
    if (box.drapeau != undefined)
        boxHTML.setAttribute('drapeau', box.drapeau);
    boxHTML.innerText = box.value;
}
function toEmoji(nb){//retourne la constante de l'emoji correspondant au nombre voulu
    switch(nb){
        case 0:
            return ZERO;
        case 1:
            return UN;
        case 2:
            return DEUX;
        case 3:
            return TROIS;
        case 4:
            return QUATRE;
        case 5:
            return CINQ;
        case 6:
            return SIX;
        case 7:
            return SEPT;
        case 8:
            return HUIT;
        case 9:
            return NEUF;
            
    }
}
function checkBombAround(box){//retourne le nombre de bombes autour de la box
    boxsAround = [];
    let nbBombsAround = 0;
    
    //si y<1 alors on check pas la box en haut
    //si x<1 alors on check pas la box a gauche
    //si y>nblignes alors on check pas la box en bas
    //si x>nbcolonnes alors on check pas la box a droite
    let box1 = document.querySelector('[x="'+(parseInt(box.getAttribute('x'))-1)+'"][y="'+(parseInt(box.getAttribute('y'))-1)+'"]');
    let box2 = document.querySelector('[x="'+(parseInt(box.getAttribute('x')))+'"][y="'+(parseInt(box.getAttribute('y'))-1)+'"]');
    let box3 = document.querySelector('[x="'+(parseInt(box.getAttribute('x'))+1)+'"][y="'+(parseInt(box.getAttribute('y'))-1)+'"]');

    let box4 = document.querySelector('[x="'+(parseInt(box.getAttribute('x'))-1)+'"][y="'+(parseInt(box.getAttribute('y')))+'"]');
    let box5 = document.querySelector('[x="'+(parseInt(box.getAttribute('x'))+1)+'"][y="'+(parseInt(box.getAttribute('y')))+'"]');

    let box6 = document.querySelector('[x="'+(parseInt(box.getAttribute('x'))-1)+'"][y="'+(parseInt(box.getAttribute('y'))+1)+'"]');
    let box7 = document.querySelector('[x="'+(parseInt(box.getAttribute('x')))+'"][y="'+(parseInt(box.getAttribute('y'))+1)+'"]');
    let box8 = document.querySelector('[x="'+(parseInt(box.getAttribute('x'))+1)+'"][y="'+(parseInt(box.getAttribute('y'))+1)+'"]');
    boxsAround.push(box1,box2,box3,box4,box5,box6,box7,box8);

    boxsAround.forEach(element => {
        if(element != undefined){
            if(element.getAttribute('etat') == 1){
                nbBombsAround+=1;
            }
        }
    });
    return nbBombsAround;
}


function checkAreaEmptyBoxAround(box){//fonction qui decouvre les cases vides autour de la box
    let boxsAroundEmpty = [];


    let box1 = document.querySelector('[x="'+(parseInt(box.getAttribute('x'))-1)+'"][y="'+(parseInt(box.getAttribute('y'))-1)+'"]');
    let box2 = document.querySelector('[x="'+(parseInt(box.getAttribute('x')))+'"][y="'+(parseInt(box.getAttribute('y'))-1)+'"]');
    let box3 = document.querySelector('[x="'+(parseInt(box.getAttribute('x'))+1)+'"][y="'+(parseInt(box.getAttribute('y'))-1)+'"]');

    let box4 = document.querySelector('[x="'+(parseInt(box.getAttribute('x'))-1)+'"][y="'+(parseInt(box.getAttribute('y')))+'"]');
    let box5 = document.querySelector('[x="'+(parseInt(box.getAttribute('x'))+1)+'"][y="'+(parseInt(box.getAttribute('y')))+'"]');

    let box6 = document.querySelector('[x="'+(parseInt(box.getAttribute('x'))-1)+'"][y="'+(parseInt(box.getAttribute('y'))+1)+'"]');
    let box7 = document.querySelector('[x="'+(parseInt(box.getAttribute('x')))+'"][y="'+(parseInt(box.getAttribute('y'))+1)+'"]');
    let box8 = document.querySelector('[x="'+(parseInt(box.getAttribute('x'))+1)+'"][y="'+(parseInt(box.getAttribute('y'))+1)+'"]');
    boxsAround.push(box1,box2,box3,box4,box5,box6,box7,box8);
    boxsAround.forEach(element => {

        if(element != undefined){
            let nbBombsAround = checkBombAround(element);
            if(element.getAttribute('etat') == 0 && element.getAttribute('decouvert') == 0){

                element.value = toEmoji(nbBombsAround);
                element.decouvert = 1;
                grilleUpdateBox(element);
                if(checkBombAround(element) == 0){
                    checkAreaEmptyBoxAround(element);
                }
            }
        }
        
    });

}