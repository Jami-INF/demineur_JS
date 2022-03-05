class Box{
    id;
    etat;//0 = vide, 1=bombe
    value;
    y;
    x;
    constructor(id,etat,value,y,x){
        this.id = id;
        this.etat = etat;
        this.value = value;
        this.y = y;
        this.x = x;
    }  
    


}
function switchEtat(){
    if(this.etat == 0){
        this.etat = 1;
    }else{
        this.etat = 0;
    }
}
function grilleUpdateBox(box){
    let boxHTML = document.getElementById(box.id);
    boxHTML.setAttribute('etat',box.etat);
    boxHTML.innerText = box.value;
}
function checkBombAround(box){
    boxsAround = [];
    let nbBombsAround = 0;


    let box1 = document.querySelector('[x="'+(box.getAttribute('x')-1)+'"][y="'+(box.getAttribute('y')-1)+'"]');
    let box2 = document.querySelector('[x="'+(box.getAttribute('x'))+'"][y="'+(box.getAttribute('y')-1)+'"]');
    let box3 = document.querySelector('[x="'+(box.getAttribute('x')+1)+'"][y="'+(box.getAttribute('y')-1)+'"]');

    let box4 = document.querySelector('[x="'+(box.getAttribute('x')-1)+'"][y="'+(box.getAttribute('y'))+'"]');
    let box5 = document.querySelector('[x="'+(box.getAttribute('x')+1)+'"][y="'+(box.getAttribute('y'))+'"]');

    let box6 = document.querySelector('[x="'+(box.getAttribute('x')-1)+'"][y="'+(box.getAttribute('y')+1)+'"]');
    let box7 = document.querySelector('[x="'+(box.getAttribute('x'))+'"][y="'+(box.getAttribute('y')+1)+'"]');
    let box8 = document.querySelector('[x="'+(box.getAttribute('x')+1)+'"][y="'+(box.getAttribute('y')+1)+'"]');

    boxsAround.push(box1,box2,box3,box4,box5,box6,box7,box8);
    boxsAround.forEach(element => {
        if(element != undefined){
            
            if(element.getAttribute('etat') == 1){
                nbBombsAround+=1;
            }
        }
    });
    return String.fromCodePoint(toEmoji(nbBombsAround));
    

}

function toEmoji(nb){
    switch(nb){
        case 0:
            return ZERO
        case 1:
            return UN
        case 2:
            return DEUX
        case 3:
            return TROIS
        case 4:
            return QUATRE
        case 5:
            return CINQ
        case 6:
            return SIX
        case 7:
            return SEPT
        case 8:
            return HUIT
        case 9:
            return NEUF
            
    }
}