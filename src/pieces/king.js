import board from '../board';
import Piece from './piece';

class King extends Piece {
    constructor(x = -1, y = -1, side) {
        super(x, y, side);
        this.validateInput(x,y,side)
        
        this.name = 'king';
        this.display = `<i class="fas fa-chess-king ${side}"></i>`;
         //fontawesome king
        if(x == -1 || y == -1){
            this.x = side === "white" ? 7 : 0 
            this.y = 4;
        } else {
            this.x = parseInt(x);
            this.y = parseInt(y);
        }
    }

    findLegalMoves() {
        const possibleMoves = [];

        for(let x = -1; x <= 1; x++){
            for(let y = -1; y <= 1; y++){
                let expectedX = this.x + x >= 0 && this.x + x < 8 ? this.x + x : undefined;
                let expectedY = this.y + y >= 0 && this.y + y < 8 ? this.y + y : undefined;

                if(expectedX && expectedY){
                    let piece = this.pieceOnSquare(expectedX, expectedY); 

                    if(piece){
                        piece.side === "black" && this.isSafe(expectedX, expectedY) ? 0 : possibleMoves.push({x: expectedX, y: expectedY});
                    } else if(this.isSafe(expectedX, expectedY)) possibleMoves.push({x: expectedX, y: expectedY});
                } else continue
            }
        }
        return possibleMoves;
    }

    isSafe(x, y){
        /* 
        ** Need some way to check if the piece is backed (covered) by some other figure
        ** can't do it with this implementation of findLegalMoves 
        */

        // Doing this dirty way by removing piece from board and then checking legal moves
        const enemySide = this.side === "white" ? "black" : "white";
        const pieceOnSquare = board[x][y];
        let isSafe = true;

        if(pieceOnSquare) board[x][y] = undefined;

        loopRow: for(const row of board){
            for(const square of row){
                const piece = this.pieceOnSquare(row, square);
                if(piece.side !== enemySide) continue;
                const moves = piece.findLegalMoves();

                for(const coords in moves){
                    if(coords.x === x && coords.y === y){
                        isSafe = false;
                        break loopRow;
                    } 
                }
            }
        }

        if(pieceOnSquare) board[x][y] = pieceOnSquare;
        return isSafe
    }
    
    willBeCheck(piece, x, y){
        board[piece.x][piece.y] = undefined;
        const pieceOnDestination = board[x][y]
        board[x][y] = piece;
        const willBeCheck = this.isSafe(this.x, this.y);
        board[piece.x][piece.y] = piece;
        board[x][y] = pieceOnDestination;
        return willBeCheck
    }

    validateInput(x,y,side){
        if(x < -1 || x > 7){ throw `x is out of range.`}
        if(y < -1 || y > 7){ throw `y is out of range.`}
        if(side !== "white" && side !== "black"){throw `Wrong value of parameter side: ${side}`}
    }
}

export default King;
