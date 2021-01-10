import Piece from './piece';

class Rook extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'rook';
        this.display = `<i class="fas fa-chess-rook ${side}"></i>`; //fontawesome rook
    }
    findLegalMoves() {
        const possibleMoves = [];
        if (this.side == 'white') {
            for (let i = 0; i <= 6; i++) {
                this.x - i > 0 && possibleMoves.push(`${this.x - i - 1},${this.y}`);
            }

            for (let i = 0; i >= -6; i--) {
                this.x - i < 7 && possibleMoves.push(`${this.x - i + 1},${this.y}`);
            }

            for (let i = 0; i <= 6; i++) {
                this.y - i > 0 && possibleMoves.push(`${this.x},${this.y - i - 1}`);
            }

            for (let i = 0; i >= -6; i--) {
                this.y - i < 7 && possibleMoves.push(`${this.x},${this.y - i + 1}`);
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
