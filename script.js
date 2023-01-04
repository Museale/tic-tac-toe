const gameboard = (() => {
    let cells = [];
    let playWithFriend = false;
    let playAgainstComputer = true;

    let gameboardObj = {

    cacheDom: (function () {
      this.wrapper = document.getElementById('gameboard-wrapper');
      this.modal = document.getElementById('modal');
      this.modalPara = document.getElementById('modal-para');
      this.computerBtn = document.getElementById('computer-btn');
      this.clearBtn = document.getElementById('clear');
      this.startBtn =  document.getElementById('start');
      this.gameboardContainer = document.getElementById('gameboard-container');
      this.gameboardContainerDivs = Array.from(document.querySelectorAll('#gameboard-container > div'));
      this.playerOne = () => document.getElementById('player-one').value;
      if (playWithFriend) {
        this.playerTwo = () => document.getElementById('player-two').value;
      } else {
        return this.playerTwo = 'AI';
      }
     
    })(),

    placeCells: (function(){
      let index = 0;
      this.gameboardContainerDivs.forEach(element => {
          element.value = index++;
          element.classList.add('cell');
          cells.push(element);
      })
    })(),     
    
    bindEvents: (function () {
      this.clearBtn.addEventListener('click', () => {
        window.location.reload();
      });

      this.startBtn.addEventListener('click', () => {
        this.wrapper.style = "opacity: 1;"
        this.wrapper.classList.add('ease-in');
        playWithFriend = true;
        console.log(playWithFriend)
        this.modal.style = 'opacity: 1';
        this.modalPara.textContent =  `May the best one win ${this.playerOne()} is X and ${this.playerTwo()} is O`;
      });

      cells.forEach(element => {
          element.addEventListener('click', (e) => {
          e.target.classList.add('picked');
          gameplay.checkplay.checkWin(e.target);
        });
      });
  })()
  
  }
  return {
    gameboardObj, 
    cells, 
    playWithFriend, 
    playAgainstComputer
  }
  })();

const gameplay =  (() => {
  let turn = false;
  let tie = 0;
  let winner = '';
  let cells = gameboard.cells;
  let playWithFriend = gameboard.playWithFriend;
  let playAgainstComputer = gameboard.playAgainstComputer;

  const checkplay =  {
      
    win: {
      rowOne: [cells[0], cells[1], cells[2]],
      reowTwo: [cells[3], cells[4], cells[5]],
      rowThree: [cells[6], cells[7], cells[8]],
      columnOne: [cells[0], cells[3], cells[6]],
      columnTwo: [cells[1], cells[4], cells[7]],
      columnThree:  [cells[2], cells[5], cells[8]],
      diagonalOne: [cells[0], cells[4], cells[8]],
      diagonalTwo:[cells[2], cells[4], cells[6]],
    },

    computerPlay: function () {
      if (playAgainstComputer) {
        playerTwo = 'Computer';
        const min = 0;
        const max = cells.length;
    
      return computerChoice;
      }
    },

    checkWin: function (e) {
      tie++;
        const min = 0;
        const max = cells.length;
      if (!winner) {
        if (tie == 9) {
          modalPara.textContent = "EVERYBODY'S A LOSER."
          modal.style = "opacity: 1"
        }
          if (!turn && !e.classList.contains('O')) {
            e.classList.add('X');
            turn = true;
            if (playAgainstComputer) {
              const computerChoice = () => Math.floor(Math.random()* (max - min + 1) + min);
                for (let i = 0; i < cells.length; i++) {
                  e = cells[computerChoice()];
                    if (e && !e.classList.contains('picked')) {
                      tie ++;
                      e.classList.add('O')
                      e.classList.add('picked')
                      turn = false;
                    break;
                    } 
                }
            }
        }
          else if (turn && !e.classList.contains('X')) {
            e.classList.add('O');
            turn = false;
            }
      };
        const entries = Object.entries(this.win);

        const mappedProperties = entries.map((key) => { 
            Array.from(key[1]).map((i) => {
              if (i.classList.contains('X') && !key.includes('O')) {
                key.push('X');
                if (key.length >= 5) {
                  console.log('longer than five');
                  modal.style = 'opacity: 1';
                  gameboardContainer.style = "background: grey";
                  modalPara.textContent = `Congratulations ${playerOne()} X WINS!`;;
                  return winner = 'X';
                }
              }
              if (i.classList.contains('O') && !key.includes('X')) {
                key.push('O');
                if (key.length >= 5) {
                  console.log('longer than five');
                  modal.style = 'opacity: 1';
                  gameboardContainer.style = "background: grey";
                  modalPara.textContent = `Congratulations ${playerTwo()} O WINS!`;;
                  return winner = 'O';
              }
            }
        })});
      }
    }
  return {checkplay, winner};
})();

