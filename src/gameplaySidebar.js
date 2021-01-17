import { timer } from './startSetupBox';

const formatTime = (clockTimer) => {
    let time;
    if (clockTimer == 10) {
        time = `${clockTimer}:00`;
    } else {
        time = `0${clockTimer}:00`;
    }
    return time;
};

export const gameplaySidebar = () => {
    const wrapper = document.getElementById('wrapper');
    const gameplaySidebar = document.createElement('div');
    gameplaySidebar.id = 'gameplaySidebar';
    wrapper.appendChild(gameplaySidebar);

    const blackPlayerTimerContainer = document.createElement('div');
    blackPlayerTimerContainer.className = 'blackPlayerTimerContainer';
    const blackPlayerTimer = document.createElement('div');
    blackPlayerTimer.className = 'blackPlayerTimer';
    blackPlayerTimer.id = 'blackPlayerTimer';

    updatePlayerTimer(blackPlayerTimer, timer.clockTimer);
    // blackPlayerTimer.innerHTML = formatTime(timer.clockTimer);

    blackPlayerTimerContainer.appendChild(blackPlayerTimer);
    gameplaySidebar.appendChild(blackPlayerTimerContainer);

    const gameHistoryRecording = document.createElement('div');
    gameHistoryRecording.className = 'gameHistoryRecording';
    const recordingListMoves = document.createElement('ol');
    recordingListMoves.className = 'recordingListMoves';
    const recordingMovesHistory = document.createTextNode(`history`);
    recordingListMoves.appendChild(recordingMovesHistory);
    gameHistoryRecording.appendChild(recordingListMoves);

    gameplaySidebar.appendChild(gameHistoryRecording);

    const whitePlayerTimerContainer = document.createElement('div');
    whitePlayerTimerContainer.className = 'whitePlayerTimerContainer';
    const whitePlayerTimer = document.createElement('div');
    whitePlayerTimer.className = 'whitePlayerTimer';
    whitePlayerTimer.id = 'whitePlayerTimer';

    updatePlayerTimer(whitePlayerTimer, timer.clockTimer);
    // whitePlayerTimer.innerHTML = formatTime(timer.clockTimer);

    whitePlayerTimerContainer.appendChild(whitePlayerTimer);
    gameplaySidebar.appendChild(whitePlayerTimerContainer);
};

export const updatePlayerTimer = (playerTimer, time) => {
    playerTimer.innerHTML = formatTime(time);
};
