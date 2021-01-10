import Piece from './piece';

class Queen extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'queen';
        this.display = `<i class="fas fa-chess-queen ${side}"></i>`; //fontawesome queen

        if (x == -1 || y == -1) {
            this.x = side === 'white' ? 7 : 0;
            this.y = 3;
        } else {
            this.x = parseInt(x);
            this.y = parseInt(y);
        }
    }
    // to jest testowy komentarz
    findLegalMoves() {
        const possibleMoves = [];

        return possibleMoves;
    }
}

export default Queen;
