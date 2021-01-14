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
        document.getElementById(coords).classList.remove(POSSIBLE_MOVES_CLASS);
    }

    squaresState = board[x][y].findLegalMoves();

    for (let el of squaresState) {
        if (!document.getElementById(el).classList.contains(POSSIBLE_MOVES_CLASS)) {
            document.getElementById(el).classList.add(POSSIBLE_MOVES_CLASS);
            document.getElementById(el).addEventListener('click', (e) => {
                board[x][y].move(e.currentTarget.id);
                for (let x = 0; x < board.length; x++) {
                    for (let y = 0; y < board[x].length; y++) {
                        document.getElementById(`${x},${y}`).classList.remove(POSSIBLE_MOVES_CLASS);

                        let old_element = document.getElementById(`${x},${y}`);
                        let new_element = old_element.cloneNode(true);
                        old_element.parentNode.replaceChild(new_element, old_element);

                        document.getElementById(`${x},${y}`).addEventListener('click', (e) => {
                            touched(e);
                        });
                    }
                }
            });
        }
    }
};

export default touched;
