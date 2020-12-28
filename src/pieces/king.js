import Piece from './piece';

class King extends Piece {
    constructor(x = -1, y = -1, side) {
        super(x, y, side);
        this.validateInput(x,y,side)
        
        this.name = 'king';
        this.display = `<i class="fas fa-chess-king ${side}"></i>`;
         //fontawesome king

         if(side === "white"){
            x !== -1 ? this.x = x : this.x = 7;
            y !== -1 ? this.y = y : this.y = 4;
         } else {
            x !== -1 ? this.x = x : this.x = 0;
            y !== -1 ? this.y = y : this.y = 4;
         }


    }
    findLegalMoves() {
        const possibleMoves = [];

        for(let x = -1; x <= 1; x++){
            for(let y = -1; y <= 1; y++){
                possibleMoves.push({x: this.x + x, y: this.y + y});
            }
        }

        return possibleMoves;
    }

    validateInput(x,y,side){
        if(x < -1 || x > 7){ throw `x is out of range.`}
        if(y < -1 || y > 7){ throw `y is out of range.`}
        if(side !== "white" && side !== "black"){throw `Wrong value of parameter side: ${side}`}
    }
}

export default King;
