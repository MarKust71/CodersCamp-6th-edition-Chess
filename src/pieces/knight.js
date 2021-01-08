import Piece from './piece';

class Knight extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'knight';
        this.display = `<i class="fas fa-chess-knight ${side}"></i>`; //fontawesome knight
    }
    findLegalMoves() {
        const possibleMoves = [];
            if (this.side == 'white') {
                this.x - 2 > -1 && this.y - 1 > -1 && possibleMoves.push(`${this.x - 2},${this.y - 1}`);
                this.x - 2 > -1 && this.y + 1 < 8 && possibleMoves.push(`${this.x - 2},${this.y + 1}`);
                this.x + 2 < 8 && this.y + 1 < 8 && possibleMoves.push(`${this.x + 2},${this.y + 1}`);
                this.x + 2 < 8 && this.y - 1 > -1 && possibleMoves.push(`${this.x + 2},${this.y - 1}`);
                
                this.x - 1 > -1 && this.y - 2 > -1 && possibleMoves.push(`${this.x - 1},${this.y - 2}`);
                this.x - 1 > -1 && this.y + 2 < 8 && possibleMoves.push(`${this.x - 1},${this.y + 2}`);
                this.x + 1 < 8 && this.y + 2 < 8 && possibleMoves.push(`${this.x + 1},${this.y + 2}`);
                this.x + 1 < 8 && this.y - 2 > -1 && possibleMoves.push(`${this.x + 1},${this.y - 2}`);

            }
            return possibleMoves;
    }
}

export default Knight;