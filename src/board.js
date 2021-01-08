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


let rook = new Rook(7, 0, 'white');
board[rook.x][rook.y] = rook;
rook = new Rook(7, 7, 'white');
board[rook.x][rook.y] = rook;

//Knight - white - rozstawienie

let knight = new Knight(7, 1, 'white');
board[knight.x][knight.y] = knight;
knight = new Knight(7, 6, 'white');
board[knight.x][knight.y] = knight;

// Knight - white - rozstawienie KONIEC

export default board;
