import Piece from './piece';
import Bishop from '../pieces/bishop';
import Queen from '../pieces/queen';
import Knight from '../pieces/knight';
import Rook from '../pieces/rook';
import board from '../board';

class Pawn extends Piece {
    constructor(x, y, side, board) {
        super(x, y, side, board);
        this.name = 'pawn';
        this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
        this.direction = this.side === 'white' ? -1 : 1;
    }

    findLegalMoves() {
        const x = this.x;
        const y = this.y;
        const v = this.direction;
        const possibleMoves = [];
        const enemy = this.pieceOnSquare(`${x + v}`, `${y}`);
        const toCaptureOnLeft = this.pieceOnSquare(`${x + v}`, `${y - 1}`);
        const toCaptureOnRight = this.pieceOnSquare(`${x + v}`, `${y + 1}`);
        const enemyByTwo = this.pieceOnSquare(`${x + v * 2}`, `${y}`);
        const ownInFront = this.pieceOnSquare(`${x + v}`, `${y}`);
        const moveByTwo = `${x + v * 2},${y}`;
        const moveByOne = `${x + v},${y}`;
        const moveCrossLeft = `${x + v},${y - 1}`;
        const moveCrossRight = `${x + v},${y + 1}`;

        if (!(enemy || ownInFront)) {
            if (this.x === (this.side === 'white' ? 6 : 1)) {
                if (enemyByTwo) {
                    possibleMoves.push(moveByOne);
                } else {
                    possibleMoves.push(moveByOne);
                    possibleMoves.push(moveByTwo);
                }
            } else {
                if (this.x !== (this.side === 'white' ? 0 : 7)) {
                    possibleMoves.push(moveByOne);
                }
            }
        }
        if (toCaptureOnRight && this.side !== toCaptureOnRight.side) {
            possibleMoves.push(moveCrossRight);
        }
        if (toCaptureOnLeft && this.side !== toCaptureOnLeft.side) {
            possibleMoves.push(moveCrossLeft);
        }
        return possibleMoves;
    }

    promote() {
        const typePiece = ['queen', 'rook', 'knight', 'bishop'];
        const x = this.x;
        const y = this.y;
        const side = this.side;
        const wrapper = document.getElementById('wrapper');
        const promotionWindow = document.createElement('div');

        function switchFigures(e) {
            let newFigure;
            switch (e.target.id) {
                case 'bishop':
                    newFigure = new Bishop(x, y, side);
                    break;
                case 'queen':
                    newFigure = new Queen(x, y, side);
                    break;
                case 'knight':
                    newFigure = new Knight(x, y, side);
                    break;
                case 'rook':
                    newFigure = new Rook(x, y, side);
                    break;
                default:
                    break;
            }
            board[x][y] = newFigure;
            document.querySelector(`[id="${x},${y}"]`).innerHTML = newFigure.display;
            wrapper.removeChild(promotionWindow);
        }

        if (x === (side === 'white' ? 0 : 7)) {
            promotionWindow.className = 'promoChoice';
            wrapper.appendChild(promotionWindow);

            const promotionWindowList = document.createElement('ul');
            promotionWindowList.className = 'promoChoiceList';
            promotionWindow.appendChild(promotionWindowList);

            for (const piece of typePiece) {
                const promotionWindowListIcon = document.createElement('li');
                promotionWindowListIcon.classList = 'promoChoiceItem';
                promotionWindowList.appendChild(promotionWindowListIcon);

                const promoteToNewPiece = document.createElement('i');
                promoteToNewPiece.className = `fas fa-chess-${piece} ${side}`;
                promoteToNewPiece.id = `${piece}`;
                promotionWindowListIcon.appendChild(promoteToNewPiece);
                promoteToNewPiece.addEventListener('click', (event) => {
                    switchFigures(event, board);
                });
            }
        }
    }
    enPassant() {}
}

export default Pawn;
