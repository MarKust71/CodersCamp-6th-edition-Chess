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
                this.x - 2 > 0 this.y -1 && this.y +1 && possibleMoves.push(`${this.x - 2},${this.y - 1},${this.y + 1}`);
                this.x -2
            }
        return possibleMoves;
    }
}
console.log('czy dziala?');
export default Knight;
