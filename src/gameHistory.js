export const gameHistory = {
    history: [],

    whoseTurn() {
        return this.history.length % 2 === 0 ? 'white' : 'black';
    },

    newMove(move) {
        this.history.push(move);
    },

    undoMove() {},

    playFromTheStart() {},
};

export class Move {
    constructor(piece, coords, special, check = false, checkMate = false) {
        this.piece = piece;
        this.coords = coords;
        this.check = check;
        this.checkMate = checkMate;
        this.special = special;
    }
}

export default gameHistory;
