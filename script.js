const gameboard = (() => {
  const wrapper = document.getElementById('gameboard-wrapper');
  const modal = document.getElementById('modal');
  const modalPara = document.getElementById('modal-para');
  const computerBtn = document.getElementById('computer-btn');
  const clearBtn = document.getElementById('clear');
  const startBtn = document.getElementById('start');
  const gameboardContainer = document.getElementById('gameboard-container');
  const gameboardContainerDivs = Array.from(document.querySelectorAll('#gameboard-container > div'));
  const iconOne = document.querySelector('#player-one-icon');
  const iconTwo = document.querySelector('#player-two-icon');
  const inputFieldOne = document.querySelector('#player-one');
  const inputFieldTwo = document.querySelector('#player-two');
  const cells = [];

  const gameboardObj = {
    playerOne: () => document.getElementById('player-one').value,
    playerTwo: () => {
      if (gameboardObj.playAgainstFriend) {
        return document.getElementById('player-two').value;
      }
      return 'AI';
    },

    placeCells: (function () {
      let index = 0;
      gameboardContainerDivs.forEach((element) => {
        element.value = index++;
        element.classList.add('cell');
        cells.push(element);
      });
    }()),

    bindEvents: (function () {
      clearBtn.addEventListener('click', () => {
        window.location.reload();
      });

      startBtn.addEventListener('click', () => {
        wrapper.style = 'opacity: 1;';
        wrapper.classList.add('ease-in');
        gameboardObj.playAgainstFriend = true;
        gameboardObj.playAgainstComputer = false;
        modal.style = 'opacity: 1';
        modalPara.textContent = `May the best one win ${gameboardObj.playerOne()} is X and ${gameboardObj.playerTwo()} is O`;
      });

      computerBtn.addEventListener('click', () => {
        modalPara.textContent = 'Playing against AI';
        gameboardObj.playAgainstComputer = true;
        gameboardObj.playAgainstFriend = false;
        gameboardContainer.style.visibility = 'visible';
      });

      cells.forEach((element) => {
        element.addEventListener('click', (e) => {
          e.target.classList.add('picked');
          gameplay.checkplay.checkWin(e.target);
        });
      });

      iconOne.addEventListener('click', () => {
        inputFieldOne.style.visibility = 'visible';
      });
      iconTwo.addEventListener('click', () => {
        inputFieldTwo.style.visibility = 'visible';
      });
    }()),
  };

  return {
    gameboardObj,
    cells,
    modal,
    modalPara,
    gameboardContainer,
  };
})();

const gameplay = (() => {
  let turn = false;
  let tie = 0;
  let winner = '';
  const { cells } = gameboard;

  const checkplay = {

    win: {
      rowOne: [cells[0], cells[1], cells[2]],
      reowTwo: [cells[3], cells[4], cells[5]],
      rowThree: [cells[6], cells[7], cells[8]],
      columnOne: [cells[0], cells[3], cells[6]],
      columnTwo: [cells[1], cells[4], cells[7]],
      columnThree: [cells[2], cells[5], cells[8]],
      diagonalOne: [cells[0], cells[4], cells[8]],
      diagonalTwo: [cells[2], cells[4], cells[6]],
    },

    minimax(e) {

    },

    checkWin(e) {
      function createBoardArray() {
        const boardArray = new Array(9);
        // Initialize an array of length 9 to represent the 9 cells on the game board
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('X')) {
            boardArray[i] = 'X';
          } else if (cells[i].classList.contains('O')) {
            boardArray[i] = 'O';
          } else {
            boardArray[i] = null;
          }
        }
        console.log(boardArray);
        return boardArray;
      }

      createBoardArray();

      const min = 0;
      const max = cells.length;
      tie++;
      if (!winner) {
        if (tie === 9) {
          gameboard.modalPara.textContent = "EVERYBODY'S A LOSER.";
          gameboard.modal.style = 'opacity: 1';
          gameboard.gameboardContainer.style = 'background: grey';
        }
        if (!turn && !e.classList.contains('O')) {
          e.classList.add('X');
          turn = true;
          if (gameboard.gameboardObj.playAgainstComputer) {
            const computerChoice = () => Math.floor(Math.random() * (max - min + 1) + min);
            for (const i of cells) {
              e = cells[computerChoice()];
              if (e && !e.classList.contains('picked')) {
                tie++;
                e.classList.add('O');
                e.classList.add('picked');
                turn = false;
                break;
              }
            }
          }
        } else if (turn && !e.classList.contains('X')) {
          e.classList.add('O');
          turn = false;
        }
      }

      const entries = Object.entries(this.win);

      entries.map((key) => {
        for (const i of key[1]) {
          if (i.classList.contains('X') && !key.includes('O')) {
            key.push('X');
            if (key.length >= 5) {
              gameboard.modal.style = 'opacity: 1';
              gameboard.gameboardContainer.style = 'background: grey';
              gameboard.modalPara.textContent = `Congratulations ${gameboard.gameboardObj.playerOne()} X WINS!`;
              winner = 'X';
              return winner;
            }
          }
          if (i.classList.contains('O') && !key.includes('X')) {
            key.push('O');
            if (key.length >= 5) {
              gameboard.modal.style = 'opacity: 1';
              gameboard.gameboardContainer.style = 'background: grey';
              gameboard.modalPara.textContent = `Congratulations ${gameboard.gameboardObj.playerTwo()} O WINS!`;
              winner = 'O';
              return winner;
            }
          }
        }
      });
    },
  };
  return { checkplay };
})();
