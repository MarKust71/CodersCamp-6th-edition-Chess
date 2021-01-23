import board from '../board';
import { gameHistory, Move } from '../gameHistory';

class AnimMove {
    constructor(xx1,yy1,xx2,yy2, fin) {
        this.x1 = xx1*10 + 10; //- 97.5;
        this.y1 = yy1*10 +10; //-35;
        this.x2 = xx2*10 + 10;
        this.y2 = yy2*10 + 10;
    //}

      //============= animi MOVE ===============

/*      const animBox = document.createElement('div');
      animBox.classList.add('animBox');
      const boardDiv = document.getElementById('board');
      //boardDiv.appendChild(animBox);
      wrapper.appendChild(animBox);
  
      animPiece(0,0,0,3); 
  
      function animPiece(xx1,yy1,xx2,yy2){
          let x1 = xx1*10 + 10; //- 97.5;
          let y1 = yy1*10 +10; //-35;
          let x2 = xx2*10 + 10;
          let y2 = yy2*10 + 10;*/
  
          const nF = 25;          // liczba klatek ruchu;
          let dx = (x2-x1)/nF;
          let dy = (y2-y1)/nF;
          
         // console.log(xx1,yy1,xx2,yy2)
  
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

          //------------------------------------
    move(id) {
        const newX = Number(id[0]);
        const newY = Number(id[2]);
        const enemyKing = this.findKing(this.side === 'white' ? 'black' : 'white');
        const move = new Move(
            { side: this.side, name: this.name },
            { origin: [this.x, this.y], destination: [newX, newY] },
        );
        this.hasMoved = true;

        //Castle exception
        if (this.name === 'king' && Math.abs(this.y - newY) > 1) {
            const rook = board[newX][this.y < newY ? 7 : 0];
            const rookNewY = newY === 6 ? newY - 1 : newY + 1;

            this.castle(rook, rookNewY);

            move.special = {
                type: rookNewY < 4 ? 'castle long' : 'castle short',
                coords: { origin: [rook.x, rook.y], destination: [newX, rookNewY] },
            };
        }

        //clearing previous place
        board[this.x][this.y] = null;
        document.getElementById(`${this.x},${this.y}`).innerHTML = '';

        //setting new
        this.x = newX;
        this.y = newY;
        board[this.x][this.y] = this;
        document.getElementById(id).innerHTML = this.display;
        move.check = enemyKing.underCheck();

        gameHistory.newMove(move);

        if (move.check && !enemyKing.hasAnyAvailableMove()) {
            gameHistory.history[gameHistory.history.length - 1].checkMate = true;
        }
    }

    promote() {}

    findLegalMoves() {}

    pieceOnSquare(x, y) {
        //Returns piece which is on the square or false if there is none
        if (board[x] && board[x][y]) {
            return board[x][y];
        }
        return false;
    }

    hasLineMovement() {
        return ['queen', 'rook', 'bishop'].includes(this.name);
    }

    findKing(side) {
        for (const row of board) {
            for (const square of row) {
                if (square && square.name === 'king' && square.side === side) return square;
            }
        }
    }
}

export default AnimMove;
