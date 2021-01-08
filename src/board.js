import Pawn from './pieces/pawn';
import Rook from './pieces/rook';

const board = new Array(8);
for (let i = 0; i < 8; i++) {
    board[i] = new Array(8);
}

for (let i = 0; i < 8; i++) {
    let pawn = new Pawn(6, i, 'white');
    board[pawn.x][pawn.y] = pawn;
}
for (let i = 0; i < 8; i++) {
    let pawn = new Pawn(1, i, 'black');
    board[pawn.x][pawn.y] = pawn;
}

let rook = new Rook(7, 0, 'white');
board[rook.x][rook.y] = rook;
rook = new Rook(7, 7, 'white');
board[rook.x][rook.y] = rook;

export default board;
