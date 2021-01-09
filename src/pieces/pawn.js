import Piece from './piece';

class Pawn extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'pawn';
        this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
        this.direction = this.side === 'white' ? -1 : 1;
    }

    findLegalMoves() {
        const x = this.x;
        const y = this.y;
        const v = this.direction;
        const possibleMoves = [];
        const enemy = this.pieceOnSquare(`${x + v}`, `${y}`);
        const toCaptureOnLeft = this.pieceOnSquare(`${x + v}`, `${y - 1}`);
        const toCaptureOnRight = this.pieceOnSquare(`${x + v}`, `${y + 1}`);
        const enemyByTwo = this.pieceOnSquare(`${x + v * 2}`, `${y}`);
        const ownInFront = this.pieceOnSquare(`${x + v}`, `${y}`);
        const moveByTwo = `${x + v * 2},${y}`;
        const moveByOne = `${x + v},${y}`;
        const moveCrossLeft = `${x + v},${y - 1}`;
        const moveCrossRight = `${x + v},${y + 1}`;

        if (!(enemy || ownInFront)) {
            if (this.x === (this.side === 'white' ? 6 : 1)) {
                if (enemyByTwo) {
                    possibleMoves.push(moveByOne);
                } else {
                    possibleMoves.push(moveByOne);
                    possibleMoves.push(moveByTwo);
                }
            } else {
                if (this.x !== (this.side === 'white' ? 0 : 7)) {
                    possibleMoves.push(moveByOne);
                }
            }
        }
        if (toCaptureOnRight && this.side !== toCaptureOnRight.side) {
            possibleMoves.push(moveCrossRight);
        }
        if (toCaptureOnLeft && this.side !== toCaptureOnLeft.side) {
            possibleMoves.push(moveCrossLeft);
        }
        return possibleMoves;
    }

    promote() {}
    enPassant() {}
}

export default Pawn;
