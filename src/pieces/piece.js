import board from '../board';
import { gameHistory, Move } from '../gameHistory';

class Piece {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.side = side; //'black' or 'white'
        this.hasMoved = false;
    }
    move(id) {
        const newX = Number(id[0]);
        const newY = Number(id[2]);
        this.hasMoved = true;

        gameHistory.newMove(new Move([this.x, this.y], [newX, newY]));

        // Need to think about better way of doing this.
        if (this.name === 'king' && Math.abs(this.y - newY) > 1) {
            board[newX][this.y < newY ? 7 : 0].move(`${newX},${newY === 6 ? newY - 1 : newY + 1}`);
        }

        //clearing previous place
        board[this.x][this.y] = null;
        document.getElementById(`${this.x},${this.y}`).innerHTML = '';

        //setting new
        this.x = newX;
        this.y = newY;
        board[this.x][this.y] = this;
        document.getElementById(id).innerHTML = this.display;
    }

    promote() {}

    findLegalMoves() {}

    pieceOnSquare(x, y) {
        //Returns piece which is on the square or false if there is none
        if (board[x] && board[x][y]) {
            return board[x][y];
        }
        return false;
    }

    hasLineMovement() {
        return ['queen', 'rook', 'bishop'].includes(this.name) ? true : false;
    }
}

export default Piece;
