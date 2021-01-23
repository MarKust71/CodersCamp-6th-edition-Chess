import Piece from './piece';
import gameHistory from '../gameHistory';

class Queen extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'queen';
        this.display = `<i class="fas fa-chess-queen ${side}"></i>`;
        if (x === -1 || y === -1) {
            this.x = side === 'white' ? 7 : 0;
            this.y = 3;
        } else {
            this.x = parseInt(x);
            this.y = parseInt(y);
        }
    }

    findLegalMoves() {
        const possibleMoves = [];

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
        ];

        directions.map((item) => {
            this.checkLine(item[0], item[1], possibleMoves);
        });

        return possibleMoves;
    }

    checkLine(dx, dy, possibleMoves) {
        const sameSideKing = this.findKing(this.side);
        const canMove = gameHistory.whoseTurn() === this.side;
        for (let i = 1; i < 8; i++) {
            let xx = this.x + dx * i;
            let yy = this.y + dy * i;
            if (xx >= 0 && xx < 8 && yy >= 0 && yy < 8) {
                if (canMove && sameSideKing.moveEndangerKing(this, xx, yy)) continue;
                if (this.getSquareStatus(xx, yy) == 0) {
                    // empty square
                    possibleMoves.push(`${xx},${yy}`);
                } else if (this.getSquareStatus(xx, yy) == 2) {
                    // enemy piece
                    possibleMoves.push(`${xx},${yy}`);
                    break;
                } else {
                    // my piece
                    break;
                }
            } else {
                // out of board
                break;
            }
        }
    }

    getSquareStatus(x, y) {
        let status = 0; //empty square
        let piece = this.pieceOnSquare(x, y);
        if (piece) {
            if (piece.side === this.side) {
                status = 1; // my piece
            } else {
                status = 2; // enemy piece
            }
        }
        return status;
    }
}

export default Queen;
