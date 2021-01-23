import { updatePlayerTimer } from './gameplaySidebar';
import { runTimer } from './runTimer';
import gameHistory from './gameHistory';

export const timer = (function () {
    let clockTimer = 300;
    const side = gameHistory.whoseTurn();

    const wrapper = document.getElementById('wrapper');
    const startSetupBox = document.createElement('div');
    startSetupBox.className = 'startSetupBox';

    const startCover = document.createElement('div');
    startCover.className = 'startCover';
    wrapper.appendChild(startCover);

    const title = document.createTextNode('Chose start options:');
    const setupBoxTitle = document.createElement('div');
    setupBoxTitle.className = 'setupBoxTitle';
    setupBoxTitle.appendChild(title);
    startSetupBox.appendChild(setupBoxTitle);

    const playTime = [1, 3, 5, 8];
    const playTimeStringName = ['1 minute', '3 minutes', '5 minutes', '8 minutes'];
    const playTimeForm = document.createElement('div');
    playTimeForm.id = 'playTimeForm';
    const playTimeTitle = document.createTextNode('Round time:  ');
    const playTimeTitleDiv = document.createElement('div');
    playTimeTitleDiv.appendChild(playTimeTitle);
    playTimeForm.appendChild(playTimeTitleDiv);
    const playTimeSelect = document.createElement('select');
    playTimeSelect.id = 'playTimeSelect';
    startSetupBox.appendChild(playTimeForm);
    playTimeForm.appendChild(playTimeSelect);

    for (let i = 0; i < playTimeStringName.length; i++) {
        const timeOption = document.createElement('option');
        timeOption.value = i.toString();
        timeOption.text = playTimeStringName[i];
        playTimeSelect.appendChild(timeOption);
    }

    const startGameButton = document.createElement('input');
    startGameButton.setAttribute('type', 'submit');
    startGameButton.className = 'startGameButton';
    startGameButton.value = 'Start game';
    startSetupBox.appendChild(startGameButton);
    wrapper.appendChild(startSetupBox);

    startGameButton.addEventListener('click', () => {
        clockTimer = playTime[document.getElementById('playTimeSelect').value] * 60;
        updatePlayerTimer(document.getElementById('whitePlayerTimer'), clockTimer);
        updatePlayerTimer(document.getElementById('blackPlayerTimer'), clockTimer);
        wrapper.removeChild(startSetupBox);
        wrapper.removeChild(startCover);
        runTimer.runFirstTimer(side, clockTimer);
    });

    //============= animi MOVE ===============

    const animBox = document.createElement('div');
    animBox.classList.add('animBox');
    const boardDiv = document.getElementById('board');
    //boardDiv.appendChild(animBox);
  //  wrapper.appendChild(animBox);

 //   animPiece(0,0,1,5);

    function animPiece(xx1,yy1,xx2,yy2){
        let x1 = xx1*10 + 10; //- 97.5;
        let y1 = yy1*10 +10; //-35;
        let x2 = xx2*10 + 10;
        let y2 = yy2*10 + 10;

        const nF = 25;          // liczba klatek ruchu;
        let dx = (x2-x1)/nF;
        let dy = (y2-y1)/nF;
        
        console.log(xx1,yy1,xx2,yy2)

        const figura = document.createElement('div');
        figura.classList.add('bierka');
      //  wrapper.appendChild(figura);
        animBox.appendChild(figura);
        //figura.setAttribute("style", "left: -97.5vh; top: 35vh;");
        figura.setAttribute("style", `left: ${x1}vh; top: ${y1}vh;`);
        if(document.getElementById(`${yy1},${xx1}`).firstElementChild){
            figura.appendChild(document.getElementById(`${yy1},${xx1}`).firstElementChild);
        }
        

        let ii=0;
        let xx= x1; //-97.5;
        let yy= y1; //35;
        let myTimer = setInterval(animMove, 50 );

        
        function animMove(){
            ii++;
            xx = xx+dx;
            yy = yy+dy;
            figura.setAttribute("style", `left: ${xx}vh; top: ${yy}vh;`);
            if(ii>= nF) clearInterval(myTimer);
        }

      
        // myVar = setInterval(function, milliseconds);
        // clearInterval(myVar);
    }

    return {
        clockTimer,
    };
})();
