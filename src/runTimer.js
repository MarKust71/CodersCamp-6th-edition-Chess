import { updatePlayerTimer } from './gameplaySidebar';

export const runTimer = (function () {
    let runTimerSide;
    let runTimerClockTimerBlack;
    let runTimerClockTimerWhite;
    let intervalId;

    const runFirstTimer = (side, clockTimer) => {
        runTimerSide = side;
        runTimerClockTimerBlack = clockTimer;
        runTimerClockTimerWhite = clockTimer;
        startInterval(runTimerSide, runTimerClockTimerWhite);
    };

    const startInterval = () => {
        if (runTimerSide === 'white') {
            intervalId = setInterval(() => {
                runTimerClockTimerWhite--;
                updatePlayerTimer(document.getElementById('whitePlayerTimer'), runTimerClockTimerWhite);
            }, 1000);
        } else {
            intervalId = setInterval(() => {
                runTimerClockTimerBlack--;
                updatePlayerTimer(document.getElementById('blackPlayerTimer'), runTimerClockTimerBlack);
            }, 1000);
        }
    };

    const clearAllIntervals = () => {
        clearInterval(intervalId);
        runTimerSide = runTimerSide === 'white' ? 'black' : 'white';
    };

    const setOpponentsTimer = () => {
        clearAllIntervals();
        startInterval();
    };
    return {
        runFirstTimer,
        setOpponentsTimer,
    };
})();
