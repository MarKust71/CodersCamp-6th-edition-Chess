//import Pawn from './pieces/pawn';
import King from './pieces/king';

const board = new Array(8);
for (let i = 0; i < 8; i++) {
    board[i] = new Array(8);
}
//mamy pustą tablice tu trzeba zaimportować figury wedle przykładu dla pionka

const kingWhite = new King(-1, -1, 'white');
const kingBlack = new King(-1, -1, 'black');
board[kingWhite.x][kingWhite.y] = kingWhite;
board[kingBlack.x][kingBlack.y] = kingBlack;

export default board;
