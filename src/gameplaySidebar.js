export const gameplaySidebar = () => {


        const wrapper = document.getElementById('wrapper');
        const gameplaySidebar = document.createElement('div');
        gameplaySidebar.id = "gameplaySidebar";
        wrapper.appendChild(gameplaySidebar)

        const blackPlayerTimerContainer = document.createElement("div");
        blackPlayerTimerContainer.className = "blackPlayerTimerContainer";
        const blackPlayerTimer = document.createElement("div");
        blackPlayerTimer.className = "blackPlayerTimer";
        blackPlayerTimer.innerHTML = "05:00";
        blackPlayerTimerContainer.appendChild(blackPlayerTimer)
        gameplaySidebar.appendChild(blackPlayerTimerContainer)

        const gameHistoryRecording = document.createElement("div");
        gameHistoryRecording.className = "gameHistoryRecording"
        const recordingListMoves = document.createElement("ol");
        recordingListMoves.className = "recordingListMoves";
        const recordingMovesHistory = document.createTextNode(`history`);
        recordingListMoves.appendChild(recordingMovesHistory)
        gameHistoryRecording.appendChild(recordingListMoves);

        gameplaySidebar.appendChild(gameHistoryRecording);

        const whitePlayerTimerContainer = document.createElement("div");
        whitePlayerTimerContainer.className = "whitePlayerTimerContainer";
        const whitePlayerTimer = document.createElement("div");
        whitePlayerTimer.className = "whitePlayerTimer"
        whitePlayerTimer.innerHTML = "05:00";
        whitePlayerTimerContainer.appendChild(whitePlayerTimer);
        gameplaySidebar.appendChild(whitePlayerTimerContainer);
}