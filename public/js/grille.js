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
                this.grille[i][j] = new Box(id,0,i,j);
            }
        }

    }
    grilleAddRandomBombs(){//ajoute 1/3 de la taille de la grille en bombes
        let taille = this.grille.length * this.grille.length;
        let nbBombsLeft = Math.round(taille/3);
        console.log(nbBombsLeft);
        while(nbBombsLeft>0){
            let x = Math.floor(Math.random()*this.gridSize);
            let y = Math.floor(Math.random()*this.gridSize);
            if(this.grille[x][y].etat == 0){
                this.grille[x][y].etat = 1;
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
                this.grille[x][y].etat = 1;
                nbBombsLeft-=1;
            }
        }
    }

    grilleToHTML(){
        let html = "";
        for(let i=0;i<this.gridSize;i++){
            html+="<tr>";
            for(let j=0;j<this.gridSize;j++){
                html+="<td id='"+this.grille[i][j].id+"' class='box' onclick='boxClick("+this.grille[i][j].id+")' oncontextmenu='boxRightClick("+this.grille[i][j].id+")'></td>";
            }
            html+="</tr>";
        }
    }
    grilleToString(){
        let grilleString = "";
        this.grille.forEach(function(line){
            line.forEach(function(box){
                grilleString += box.etat + " ";
            });
            grilleString += "\n";
        });

        return grilleString;
    }


}