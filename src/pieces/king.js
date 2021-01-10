import board from '../board';
import Piece from './piece';

class King extends Piece {
    constructor(x = -1, y = -1, side) {
        super(x, y, side);
        this.validateInput(x, y, side);

        this.name = 'king';
        this.display = `<i class="fas fa-chess-king ${side}"></i>`; //fontawesome king

        if (x == -1 || y == -1) {
            this.x = side === 'white' ? 7 : 0;
            this.y = 4;
        } else {
            this.x = parseInt(x);
            this.y = parseInt(y);
        }
    }

    findLegalMoves(canMove = true) {
        let possibleMoves = [];

        for (let x = -1; x <= 1; x++) {
            let expectedX = this.x + x >= 0 && this.x + x < 8 ? this.x + x : undefined;
            for (let y = -1; y <= 1; y++) {
                let expectedY = this.y + y >= 0 && this.y + y < 8 ? this.y + y : undefined;

                if (typeof expectedX === 'number' && typeof expectedY === 'number') {
                    let piece = this.pieceOnSquare(expectedX, expectedY);
                    let isDestinationSafe = canMove ? this.isSafe(expectedX, expectedY) : true;

                    if (piece) {
                        if (piece.side !== this.side && isDestinationSafe)
                            possibleMoves.push(`${expectedX},${expectedY}`);
                    } else if (isDestinationSafe) possibleMoves.push(`${expectedX},${expectedY}`);
                } else continue;
            }
        }

        possibleMoves = canMove ? [...possibleMoves, ...this.detectCastle()] : 0;
        return possibleMoves;
    }

    isSafe(x, y) {
        /*
         ** Checks if the piece or square is backed (covered) by some other figure.
         ** Doing this by removing piece from board and then checking legal moves of all enemy pieces.
         */
        const enemySide = this.side === 'white' ? 'black' : 'white';
        const pieceOnSquare = board[x][y];
        let isSafe = true;

        if (pieceOnSquare) board[x][y] = undefined;

        loopRow: for (const row of board) {
            for (const piece of row) {
                if (piece && piece.side === enemySide) {
                    if (piece.name === 'pawn') {
                        const direction = piece.side === 'white' ? -1 : 1;

                        if (x === piece.x + direction && (piece.y + 1 === y || piece.y - 1 === y)) {
                            isSafe = false;
                            break loopRow;
                        }
                    } else {
                        const moves = piece.findLegalMoves(false);
                        if (moves.length > 0) {
                            for (const coords of moves) {
                                if (coords[0] == x && coords[2] == y) {
                                    isSafe = false;
                                    break loopRow;
                                }
                            }
                        }
                    }
                }
            }
        }

        if (pieceOnSquare) board[x][y] = pieceOnSquare;
        return isSafe;
    }

    willBeCheck(piece, x, y) {
        board[piece.x][piece.y] = undefined;
        const pieceOnDestination = board[x][y];
        board[x][y] = piece;
        const willBeCheck = this.isSafe(this.x, this.y);
        board[piece.x][piece.y] = piece;
        board[x][y] = pieceOnDestination;
        //console.log('will be check!');
        return willBeCheck;
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

    detectCastle() {
        const possibleMoves = [];
        const rooks = findRooks(this);

        if (!this.isSafe(this.x, this.y) || this.hasMoved) return [];

        for (let i = 0; i < rooks.length; i++) {
            if (rooks[i] && pathClear(rooks[i], this)) {
                possibleMoves.push(`${this.x},${this.y > rooks[i].y ? this.y - 2 : this.y + 2}`);
            }
        }

        return possibleMoves;

        function pathClear(piece, king) {
            const direction = piece.y < king.y ? -1 : 1;
            let y = king.y + direction;

            while (y !== piece.y) {
                if (king.pieceOnSquare(king.x, y) && king.isSafe(king.x, y)) return false;
                y += direction;
            }

            return true;
        }

        function findRooks(king) {
            const rooks = [];
            for (let row of board) {
                for (let piece of row) {
                    if (piece && piece.side === king.side && piece.name === 'rook' && !piece.hasMoved)
                        rooks.push(piece);
                }
            }
            return rooks;
        }
    }
}

export default King;
