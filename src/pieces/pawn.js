import Piece from './piece';

class Pawn extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'pawn';
        this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
        this.direction = this.side === 'white' ? -1 : 1;
    }

    findLegalMoves() {
        // const x = this.x;
        // const y = this.y;
        const v = this.direction;
        const possibleMoves = [];
        const enemy = this.pieceOnSquare(`${this.x + v}`, `${this.y}`);
        const enemyByTwo = this.pieceOnSquare(`${this.x + v * 2}`, `${this.y}`);
        const ownInFront = this.pieceOnSquare(`${this.x + v}`, `${this.y}`);
        const firstMoveByTwo = `${this.x + v * 2},${this.y}`;
        const firstMoveByOne = `${this.x + v},${this.y}`;

        if (!(enemy || ownInFront)) {
            if (this.x === (this.side === 'white' ? 6 : 1)) {
                if (enemyByTwo) {
                    possibleMoves.push(firstMoveByOne);
                } else {
                    possibleMoves.push(firstMoveByOne);
                    possibleMoves.push(firstMoveByTwo);
                }
            } else {
                if (this.x !== (this.side === 'white' ? 0 : 7)) {
                    possibleMoves.push(firstMoveByOne);
                }
            }
        }
        return possibleMoves;
    }

    promote() {}
    enPassant() {}
}

export default Pawn;
