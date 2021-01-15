export const startSetup = () => {
    const wrapper = document.getElementById('wrapper');
    const startSetupBox = document.createElement("div");
    startSetupBox.className = "startSetupBox";

    const startCover = document.createElement('div');
    startCover.className = 'startCover';
    wrapper.appendChild(startCover);

    const title = document.createTextNode("Chose start options:");
    const setupBoxTitle = document.createElement("div");
    setupBoxTitle.className = "setupBoxTitle";
    setupBoxTitle.appendChild(title);
    startSetupBox.appendChild(setupBoxTitle);

    const playTime = [1, 3, 5, 10];
    const playTimeStringName = ["1 minute", "3 minutes", "5 minutes", "10 minutes"]
    const playTimeForm = document.createElement("div");
    playTimeForm.id = "playTimeForm";
    const playTimeTitle = document.createTextNode("Round time:  ");
    const playTimeTitleDiv = document.createElement("div");
    playTimeTitleDiv.appendChild(playTimeTitle);
    playTimeForm.appendChild(playTimeTitleDiv);
    const playTimeSelect = document.createElement("select");
    playTimeSelect.id = "playTimeSelect";
    startSetupBox.appendChild(playTimeForm);
    playTimeForm.appendChild(playTimeSelect);

    for (let i = 0; i < playTimeStringName.length; i++) {
        const timeOption = document.createElement("option");
        timeOption.value = playTime[i];
        console.log(timeOption.value)
        timeOption.text = playTimeStringName[i];
        playTimeSelect.appendChild(timeOption);
    }

    const startGameButton = document.createElement("input");
    startGameButton.setAttribute("type", "submit");
    startGameButton.className = "startGameButton";
    startGameButton.value = "Start game";
    startSetupBox.appendChild(startGameButton);
    wrapper.appendChild(startSetupBox);

    startGameButton.addEventListener("click", () => {
        wrapper.removeChild(startSetupBox);
        wrapper.removeChild(startCover);
    });
}
