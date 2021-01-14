export const gameHistory = {
    history: [],

    whoseTurn() {
        return this.history.length % 2 === 0 ? 'white' : 'black';
    },

    newMove(move) {
        this.history.push(move);
    },

    undoMove() {
        //To do
        return 0;
    },

    playFromTheStart() {
        //Odtworzenie partycji
        //To do
    },
};

export class Move {
    constructor(origin, destination, check = false, checkMate = false) {
        this.origin = origin;
        this.destination = destination;
        this.check = check;
        this.checkMate = checkMate;
    }
}

export default gameHistory;
