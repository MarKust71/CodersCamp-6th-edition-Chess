import touched from './touched';
import board from './board';
// import { timer } from './startSetupBox';
import { gameplaySidebar } from './gameplaySidebar';

const setup = () => {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            const square = document.createElement('div');
            square.id = `${x},${y}`;
            square.innerHTML = board[x][y] ? board[x][y].display : '';
            square.className = 'square';
            square.className += x % 2 === y % 2 ? ' light' : ' dark';
            square.addEventListener('click', (e) => {
                touched(e);
            });
            document.getElementById('board').appendChild(square);
        }
    }
    gameplaySidebar();
};

export default setup;
