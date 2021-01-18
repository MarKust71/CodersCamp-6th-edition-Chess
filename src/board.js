import King from './pieces/king';
import Queen from './pieces/queen';
import Pawn from './pieces/pawn';
import Knight from './pieces/knight';
import Rook from './pieces/rook';
import Bishop from './pieces/bishop';

export const board = new Array(8);
for (let i = 0; i < 8; i++) {
    board[i] = new Array(8);
}
board.width = board.length;
board.height = board.length;

export function boardSetup() {
    for (let x = 0; x < board.height; x++) {
        for (let y = 0; y < board.width; y++) {
            board[x][y] = null;
        }
    }

    for (let i = 0; i < 8; i++) {
        board[6][i] = new Pawn(6, i, 'white');
        board[1][i] = new Pawn(1, i, 'black');
    }

    board[7][4] = new King(7, 4, 'white');
    board[0][4] = new King(0, 4, 'black');

    board[7][3] = new Queen(-1, -1, 'white');
    board[0][3] = new Queen(-1, -1, 'black');

    board[7][0] = new Rook(7, 0, 'white');
    board[7][7] = new Rook(7, 7, 'white');

    board[0][0] = new Rook(0, 0, 'black');
    board[0][7] = new Rook(0, 7, 'black');

    board[7][1] = new Knight(7, 1, 'white');
    board[7][6] = new Knight(7, 6, 'white');

    board[0][1] = new Knight(0, 1, 'black');
    board[0][6] = new Knight(0, 6, 'black');

    board[0][2] = new Bishop(0, 2, 'black');
    board[0][5] = new Bishop(0, 5, 'black');

    board[7][2] = new Bishop(7, 2, 'white');
    board[7][5] = new Bishop(7, 5, 'white');
}

boardSetup();

export default board;
