class Grille{
    gridSize;
    grille = []
    constructor(gridSize){
        this.gridSize = gridSize;
    }
    
    grilleMaker(){//crée un tableau de box vide
        let id = 0;
        for(let i=0;i<this.gridSize;i++){
            this.grille[i] = [];
            for(let j=0;j<this.gridSize;j++){
                id+=1;
                this.grille[i][j] = new Box(id,0, String.fromCodePoint(CARRE_NOIR),i,j);
            }
        }
    }
    grilleAddRandomBombs(){//ajoute 1/3 de la taille de la grille en bombes
        let taille = this.grille.length * this.grille.length;
        let nbBombsLeft = Math.round(taille/3);//arrondis la taille divisé par 3
        console.log(nbBombsLeft);
        while(nbBombsLeft>0){
            let x = Math.floor(Math.random()*this.gridSize);
            let y = Math.floor(Math.random()*this.gridSize);
            if(this.grille[x][y].etat == 0){
                this.grille[x][y].etat = '1';
                this.grille[x][y].value = String.fromCodePoint(BOMBE);
                nbBombsLeft-=1;
            }
        }
    }
    grilleAddRandomBombsNB(nbBombs){//ajoute le nombre de bombes demandés
        let nbBombsLeft = nbBombs;
        while(nbBombsLeft>0){
            let x = Math.floor(Math.random()*this.gridSize);
            let y = Math.floor(Math.random()*this.gridSize);
            if(this.grille[x][y].etat == 0){
                this.grille[x][y].etat = '1';
                this.grille[x][y].value = String.fromCodePoint(BOMBE);
                nbBombsLeft-=1;
            }
        }
    }
    combienDeBombes(){
        let nbBombs = 0;
        for(let i=0;i<this.gridSize;i++){
            for(let j=0;j<this.gridSize;j++){
                if(this.grille[i][j].etat == 1){
                    nbBombs+=1;
                }
            }
        }
        return nbBombs;
    }

    grilleToHTML(){
        let emplacementgrille = document.querySelector('#container');
        let grilleHtml = document.createElement('grille');
        grilleHtml.setAttribute('id','grille');
        this.grille.forEach(function(line){
            let ligne = document.createElement('ligne');
            line.forEach(function(box){
                let boxHTML = document.createElement('button');
                boxHTML.setAttribute('id',box.id);
                boxHTML.setAttribute('etat',box.etat);
                boxHTML.setAttribute('y',box.y);
                boxHTML.setAttribute('x',box.x);
                boxHTML.innerText = box.value;
                ligne.appendChild(boxHTML);

            });
            grilleHtml.appendChild(document.createElement("br"));
            grilleHtml.appendChild(ligne);
        });
        console.log(grilleHtml);
        emplacementgrille.appendChild(grilleHtml);
        
    }
    grilleToString(){
        let grilleString = '';
        this.grille.forEach(function(line){
            line.forEach(function(box){
                grilleString += box.etat + ' ';
            });
            grilleString += '\n';
        });

        return grilleString;
    }

    



    LeftClickGrille(){
        for(let i=0;i<this.gridSize;i++){
            for(let j=0;j<this.gridSize;j++){
                let box = document.getElementById(this.grille[i][j].id);
                box.addEventListener('click',function(){

                    if (this.getAttribute("etat") == 1){
                        this.value=String.fromCodePoint(EXPLOSION);
                        clearGrille();
                        alert('Perdu');
                        start();

                    }else{
                        this.value = checkBombAround(this);
                        grilleUpdateBox(this);
                    }
                    
                    
                });
            }
        }
    }
    RightClickGrille(){
        for(let i=0;i<this.gridSize;i++){
            for(let j=0;j<this.gridSize;j++){
                let box = document.getElementById(this.grille[i][j].id);
                box.addEventListener('contextmenu',function(){
                    this.etat = 1;
                    //add a flag
                    this.value = String.fromCodePoint(DRAPEAU);
                    grilleUpdateBox(this);
                });
            }
        }
    }



}

