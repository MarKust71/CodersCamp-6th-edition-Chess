import Piece from './piece';
import board from '../board';
import gameHistory from '../gameHistory';

class Rook extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'rook';
        this.display = `<i class="fas fa-chess-rook ${side}"></i>`; //fontawesome rook
    }

    findLegalMoves() {
        const possibleMoves = [];
        const sameSideKing = this.findKing(this.side);
        const canMove = gameHistory.whoseTurn() === this.side;

        for (let i = 1; i <= 7; i++) {
            if (this.x + i <= 7) {
                if (canMove && sameSideKing.moveEndangerKing(this, this.x + i, this.y)) continue;
                if (board[this.x + i][this.y]) {
                    if (board[this.x + i][this.y].side !== this.side) {
                        possibleMoves.push(`${this.x + i},${this.y}`);
                    }
                    break;
                } else {
                    possibleMoves.push(`${this.x + i},${this.y}`);
                }
            }
        }

        for (let i = 1; i <= 7; i++) {
            if (this.x - i >= 0) {
                if (canMove && sameSideKing.moveEndangerKing(this, this.x - i, this.y)) continue;
                if (board[this.x - i][this.y]) {
                    if (board[this.x - i][this.y].side !== this.side) {
                        possibleMoves.push(`${this.x - i},${this.y}`);
                    }
                    break;
                } else {
                    possibleMoves.push(`${this.x - i},${this.y}`);
                }
            }
        }

        for (let i = 1; i <= 7; i++) {
            if (this.y + i <= 7) {
                if (canMove && sameSideKing.moveEndangerKing(this, this.x, this.y + i)) continue;
                if (board[this.x][this.y + i]) {
                    if (board[this.x][this.y + i].side !== this.side) {
                        possibleMoves.push(`${this.x},${this.y + i}`);
                    }
                    break;
                } else {
                    possibleMoves.push(`${this.x},${this.y + i}`);
                }
            }
        }

        for (let i = 1; i <= 7; i++) {
            if (this.y - i >= 0) {
                if (canMove && sameSideKing.moveEndangerKing(this, this.x, this.y - i)) continue;
                if (board[this.x][this.y - i]) {
                    if (board[this.x][this.y - i].side !== this.side) {
                        possibleMoves.push(`${this.x},${this.y - i}`);
                    }
                    break;
                } else {
                    possibleMoves.push(`${this.x},${this.y - i}`);
                }
            }
        }

        return possibleMoves;
    }

    validateInput(x, y, side) {
        if (x < -1 || x > 7) {
            throw `x is out of range.`;
        }
        if (y < -1 || y > 7) {
            throw `y is out of range.`;
        }
        if (side !== 'white' && side !== 'black') {
            throw `Wrong value of parameter side: ${side}`;
        }
    }
}

export default Rook;
