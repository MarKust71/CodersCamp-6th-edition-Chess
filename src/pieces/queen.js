import Piece from './piece';
import board from '../board';

class Queen extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'queen';
        this.display = `<i class="fas fa-chess-queen ${side}"></i>`; //fontawesome queen

        if (x == -1 || y == -1) {
            this.x = side === 'white' ? 7 : 0;
            this.y = 3;
        } else {
            this.x = parseInt(x);
            this.y = parseInt(y);
        }
    }

    findLegalMoves() {
        const possibleMoves = [];
        const thisX = this.x;
        const thisY = this.y;
        
        this.checkLine(1,0,possibleMoves);
        this.checkLine(-1,0,possibleMoves);
        this.checkLine(0,1,possibleMoves);
        this.checkLine(0,-1,possibleMoves);

        this.checkLine(1,1,possibleMoves);
        this.checkLine(1,-1,possibleMoves);
        this.checkLine(-1,1,possibleMoves);
        this.checkLine(-1,-1,possibleMoves);
        
        return possibleMoves;
    }  
    
    checkLine(dx,dy, possibleMoves){
        for(let i=1; i<8; i++){
            let xx = this.x+ dx*i;
            let yy = this.y+ dy*i;
//         console.log('stat',i,':',board[xx][yy],'stat', this.getSquareStatus(xx,yy));
            if(xx>=0 && xx<8 && yy>=0 && yy<8){
                if(this.getSquareStatus(xx,yy)==0){
                    possibleMoves.push(`${xx},${yy}`);
                }else if(this.getSquareStatus(xx,yy)==2){
                    possibleMoves.push(`${xx},${yy}`);
                    break;
                }else{
                    break;
                }
            }else{
                break;
            }     
        }
    }

    getSquareStatus(x,y){
        let status = 0;         //empty square
        let piece = this.pieceOnSquare(`${x}`, `${y}`);
       if(piece){
            if(piece.side === this.side){
                status = 1;     // my piece
            }else{
                status = 2;     // enemy piece
            }  
        } 
        return status;
    }
}

export default Queen;
