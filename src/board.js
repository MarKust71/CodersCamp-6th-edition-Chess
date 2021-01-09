import King from './pieces/king';
import Pawn from './pieces/pawn';
import Knight from './pieces/knight';
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

const kingWhite = new King(-1, -1, 'white');
const kingBlack = new King(-1, -1, 'black');
board[kingWhite.x][kingWhite.y] = kingWhite;
board[kingBlack.x][kingBlack.y] = kingBlack;

let rookWhite = new Rook(7, 0, 'white');
board[rookWhite.x][rookWhite.y] = rookWhite;
rookWhite = new Rook(7, 7, 'white');
board[rookWhite.x][rookWhite.y] = rookWhite;

let rookBlack = new Rook(0, 0, 'black');
board[rookBlack.x][rookBlack.y] = rookBlack;
rookBlack = new Rook(0, 7, 'black');
board[rookBlack.x][rookBlack.y] = rookBlack;

let knightWhite = new Knight(7, 1, 'white');
board[knightWhite.x][knightWhite.y] = knightWhite;
knightWhite = new Knight(7, 6, 'white');
board[knightWhite.x][knightWhite.y] = knightWhite;

let knightBlack = new Knight(0, 1, 'black');
board[knightBlack.x][knightBlack.y] = knightBlack;
knightBlack = new Knight(0, 6, 'black');
board[knightBlack.x][knightBlack.y] = knightBlack;

let knightWhite = new Knight(7, 1, 'white');
board[knightWhite.x][knightWhite.y] = knightWhite;
knightWhite = new Knight(7, 6, 'white');
board[knightWhite.x][knightWhite.y] = knightWhite;

let knightBlack = new Knight(0, 1, 'black');
board[knightBlack.x][knightBlack.y] = knightBlack;
knightBlack = new Knight(0, 6, 'black');
board[knightBlack.x][knightBlack.y] = knightBlack;

export default board;
