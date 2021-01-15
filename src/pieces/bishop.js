import Piece from './piece';
import board from '../board';

class Bishop extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'bishop';
        this.display = `<i class="fas fa-chess-bishop ${side}"></i>`; //fontawesome bishop
    }
    findLegalMoves() {
        const possibleMoves = [];

        for (let i = 1; i <= 7; i++) {
            if (this.x + i <= 7) {
                if (this.y + i <= 7) {
                    if (board[this.x + i][this.y + i]) {
                        if (board[this.x + i][this.y + i].side !== this.side) {
                            possibleMoves.push(`${this.x + i},${this.y + i}`);
                        }
                        break;
                    } else {
                        possibleMoves.push(`${this.x + i},${this.y + i}`);
                    }
                }
            }
        }

        for (let i = 1; i <= 7; i++) {
            if (this.x + i <= 7) {
                if (this.y - i >= 0) {
                    if (board[this.x + i][this.y - i]) {
                        if (board[this.x + i][this.y - i].side !== this.side) {
                            possibleMoves.push(`${this.x + i},${this.y - i}`);
                        }
                        break;
                    } else {
                        possibleMoves.push(`${this.x + i},${this.y - i}`);
                    }
                }
            }
        }

        for (let i = 1; i <= 7; i++) {
            if (this.x - i >= 0) {
                if (this.y + i <= 7) {
                    if (board[this.x - i][this.y + i]) {
                        if (board[this.x - i][this.y + i].side !== this.side) {
                            possibleMoves.push(`${this.x - i},${this.y + i}`);
                        }
                        break;
                    } else {
                        possibleMoves.push(`${this.x - i},${this.y + i}`);
                    }
                }
            }
        }

        for (let i = 1; i <= 7; i++) {
            if (this.x - i >= 0) {
                if (this.y - i >= 0) {
                    if (board[this.x - i][this.y - i]) {
                        if (board[this.x - i][this.y - i].side !== this.side) {
                            possibleMoves.push(`${this.x - i},${this.y - i}`);
                        }
                        break;
                    } else {
                        possibleMoves.push(`${this.x - i},${this.y - i}`);
                    }
                }
            }
        }

        return possibleMoves;
    }
}

export default Bishop;
