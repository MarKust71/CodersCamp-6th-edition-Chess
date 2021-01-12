import Piece from './piece';

class Rook extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'rook';
        this.display = `<i class="fas fa-chess-rook ${side}"></i>`; //fontawesome rook
        this.direction = this.side === 'white' ? -1 : 1;
    }

    findLegalMoves() {
        let v = this.direction;

        const enemyXright = this.pieceOnSquare(`${this.x + v}`, `${this.y}`);
        const enemyXleft = this.pieceOnSquare(`${this.x - v}`, `${this.y}`);
        const enemyYup = this.pieceOnSquare(`${this.x}`, `${this.y + v}`);
        const enemyYdown = this.pieceOnSquare(`${this.x}`, `${this.y - v}`);

        const ownPieceXright = this.pieceOnSquare(`${this.x + v}`, `${this.y}`);
        const ownPieceXleft = this.pieceOnSquare(`${this.x - v}`, `${this.y}`);
        const ownPieceYup = this.pieceOnSquare(`${this.x}`, `${this.y + v}`);
        const ownPieceYdown = this.pieceOnSquare(`${this.x}`, `${this.y - v}`);

        const possibleMoves = [];

        for (let i = 0; i <= 6; i++) {
            if (!(enemyXright || ownPieceXright || enemyXleft || ownPieceXleft)) {
                this.x - i > 0 && possibleMoves.push(`${this.x - i - 1},${this.y}`);
            }
        }

        for (let i = 0; i >= -6; i--) {
            if (!(enemyXright || ownPieceXright || enemyXleft || ownPieceXleft)) {
                this.x - i < 7 && possibleMoves.push(`${this.x - i + 1},${this.y}`);
            }
        }

        for (let i = 0; i <= 6; i++) {
            if (!(enemyYup || ownPieceYup || enemyYdown || ownPieceYdown)) {
                this.y - i > 0 && possibleMoves.push(`${this.x},${this.y - i - 1}`);
            }
        }

        for (let i = 0; i >= -6; i--) {
            if (!(enemyYup || ownPieceYup || enemyYdown || ownPieceYdown)) {
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
