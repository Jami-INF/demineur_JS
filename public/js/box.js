class Box{
    id;
    etat;//0 = vide, 1=bombe
    value;
    decouvert;
    y;
    x;
    constructor(id,etat,value, decouvert, y,x){
        this.id = id;
        this.etat = etat;
        this.value = value;
        this.decouvert = decouvert;
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
    boxHTML.setAttribute('decouvert', box.decouvert);
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
            //console.log("defini")
            if(element.getAttribute('etat') == 1){
                nbBombsAround+=1;
            }
        }
    });
    return nbBombsAround;
}


function checkAreaEmptyBoxAround(box, tmp){//fonction qui decouvre les cases vides autour de la box
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
    let i = 0;
    boxsAround.forEach(element => {

        console.log(i);
        i=i+1;
        if(element != undefined){
            //console.log("etat : "+element.getAttribute('etat'))
            //console.log("decouvert : "+element.getAttribute('decouvert'))
            if(element.getAttribute('etat') == 0 && element.getAttribute('decouvert') == 0){

                element.value = toEmoji(checkBombAround(element));
                element.decouvert = 1;
                grilleUpdateBox(element);
                if(checkBombAround(element) == 0){
                    checkAreaEmptyBoxAround(element);
                }
            }
        }
        
    });

}




/*
function checkBombAround(box){//retourne le nombre de bombes autour de la box
    boxsAround = [];
    let nbBombsAround = 0;

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
            //console.log("defini")
            if(element.getAttribute('etat') == 1){
                nbBombsAround+=1;
            }
        }
    });
    return nbBombsAround;
}
function checkAreaEmptyBoxAround(box){//fonction qui decouvre les cases vides autour de la box
    let boxsAroundEmpty = [];

    valuetmp=0;
    xtmp=box.getAttribute('x');
    ytmp=box.getAttribute('y');
    //box vers la droite
    while(valuetmp==0){
        let boxtmp = document.querySelector('[x="'+(parseInt(xtmp))+'"][y="'+(parseInt(ytmp))+'"]');
        if(boxtmp != undefined){
            if(boxtmp.getAttribute('etat')==1){
                valuetmp=1;
            }else{
                boxsAroundEmpty.push(boxtmp);
                //checkAreaEmptyBoxAround(boxtmp);
                xtmp = parseInt(xtmp)+1;
            }
        }else{
            valuetmp=1;
        }
    }
    valuetmp=0;
    xtmp=box.getAttribute('x');
    ytmp=box.getAttribute('y');
    //box vers la gauche
    while(valuetmp==0){
        let boxtmp = document.querySelector('[x="'+(parseInt(xtmp))+'"][y="'+(parseInt(ytmp))+'"]');
        if(boxtmp != undefined){
            if(boxtmp.getAttribute('etat')==1){
                valuetmp=1;
            }else{
                boxsAroundEmpty.push(boxtmp);
                xtmp = parseInt(xtmp)-1;
            }
        }else{
            valuetmp=1;
        }
    }
    valuetmp=0;
    xtmp=box.getAttribute('x');
    ytmp=box.getAttribute('y');
    //box vers le haut
    while(valuetmp==0){
        let boxtmp = document.querySelector('[x="'+(parseInt(xtmp))+'"][y="'+(parseInt(ytmp))+'"]');
        if(boxtmp != undefined){
            if(boxtmp.getAttribute('etat')==1){
                valuetmp=1;
            }else{
                boxsAroundEmpty.push(boxtmp);
                ytmp = parseInt(ytmp)+1;
            }
        }else{
            valuetmp=1;
        }
    }
    valuetmp=0;
    xtmp=box.getAttribute('x');
    ytmp=box.getAttribute('y');
    //box vers le bas
    while(valuetmp==0){
        let boxtmp = document.querySelector('[x="'+(parseInt(xtmp))+'"][y="'+(parseInt(ytmp))+'"]');
        if(boxtmp != undefined){
            if(boxtmp.getAttribute('etat')==1){
                valuetmp=1;
            }else{
                boxsAroundEmpty.push(boxtmp);
                ytmp = parseInt(ytmp)-1;
            }
        }else{
            valuetmp=1;
        }
    }


    boxsAroundEmpty.forEach(element => {
        element.value = toEmoji(checkBombAround(element));
        grilleUpdateBox(element);
    });
        

}
*/

