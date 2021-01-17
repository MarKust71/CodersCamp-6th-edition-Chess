import gameHistory from './gameHistory';
import { boardSetup } from './board';
import setup from './setup';

export function winnerDialogBox() {
    const wrapper = document.createElement('div');
    const dialogBox = document.createElement('div');
    const message = document.createElement('p');
    const newGameButton = document.createElement('button');

    wrapper.append(dialogBox);
    dialogBox.append(message);
    dialogBox.append(newGameButton);

    wrapper.classList.add('checkmate-box-wrapper');
    dialogBox.classList.add('checkmate-box');
    newGameButton.classList.add('startGameButton');

    message.textContent = `${gameHistory.history[gameHistory.history.length - 1].piece.side} is a winner!`;
    newGameButton.textContent = 'New game';
    newGameButton.addEventListener('click', newGame);

    document.getElementById('wrapper').append(wrapper);

    function newGame() {
        const newBoard = document.createElement('div');
        const gameWrapper = document.getElementById('wrapper');

        newBoard.setAttribute('id', 'board');
        gameWrapper.innerHTML = '';
        gameWrapper.append(newBoard);

        gameHistory.history = [];
        boardSetup();
        setup();
    }
}

export default winnerDialogBox;
