import board from './board';
import gameHistory from './gameHistory';

let squaresState = [];

const touched = (e) => {
    const POSSIBLE_MOVES_CLASS = 'possibleMove';
    const x = e.currentTarget.id[0];
    const y = e.currentTarget.id[2];

    if (!board[x][y]) {
        return;
    }

    if (gameHistory.whoseTurn() !== board[x][y].side) return 0;

    for (let coords of squaresState) {
        const square = document.getElementById(coords);
        square.classList.remove(POSSIBLE_MOVES_CLASS);
        //Removing eventListener by cloning and replacing node
        let new_element = square.cloneNode(true);
        square.parentNode.replaceChild(new_element, square);
    }

    squaresState = board[x][y].findLegalMoves();
    for (let el of squaresState) {
        document.getElementById(el).classList.add(POSSIBLE_MOVES_CLASS);
        document.getElementById(el).addEventListener('click', movePieceStrategy);
    }

    function movePieceStrategy(e) {
        board[x][y].move(e.currentTarget.id);
        board[e.currentTarget.id[0]][e.currentTarget.id[2]].promote();
        for (let x = 0; x < board.length; x++) {
            for (let y = 0; y < board[x].length; y++) {
                document.getElementById(`${x},${y}`).classList.remove(POSSIBLE_MOVES_CLASS);

                let old_element = document.getElementById(`${x},${y}`);
                let new_element = old_element.cloneNode(true);
                old_element.parentNode.replaceChild(new_element, old_element);

                document.getElementById(`${x},${y}`).addEventListener('click', movePiece);
            }
        }
    }

    function movePiece(e) {
        touched(e);
    }
};

export default touched;
