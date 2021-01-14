import Piece from './piece';
import board from '../board';

class Knight extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'knight';
        this.display = `<i class="fas fa-chess-knight ${side}"></i>`; //fontawesome knight
    }
    findLegalMoves() {
        const possibleMoves = [];
        const movesRelatedToKnightsPosition = [
            [-2, -1],
            [-2, 1],
            [2, 1],
            [2, -1],
            [-1, -2],
            [-1, 2],
            [1, 2],
            [1, -2],
        ];

        movesRelatedToKnightsPosition.map((item) => {
            if (this.x + item[0] > -1 && this.x + item[0] < 8 && this.y + item[1] > -1 && this.y + item[1] < 8) {
                if (board[this.x + item[0]][this.y + item[1]]) {
                    if (this.side !== board[this.x + item[0]][this.y + item[1]].side) {
                        possibleMoves.push(`${this.x + item[0]},${this.y + item[1]}`);
                    }
                } else {
                    possibleMoves.push(`${this.x + item[0]},${this.y + item[1]}`);
                }
            }
        });

        return possibleMoves;
    }
}

export default Knight;
