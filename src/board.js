import King from './pieces/king';
import Pawn from './pieces/pawn';
import Rook from './pieces/rook';

const board = new Array(8);
for (let i = 0; i < 8; i++) {
    board[i] = new Array(8);
}

const kingWhite = new King(-1, -1, 'white');
const kingBlack = new King(-1, -1, 'black');
board[kingWhite.x][kingWhite.y] = kingWhite;
board[kingBlack.x][kingBlack.y] = kingBlack;

let rook = new Rook(7, 0, 'white');
board[rook.x][rook.y] = rook;
rook = new Rook(7, 7, 'white');
board[rook.x][rook.y] = rook;

export default board;
