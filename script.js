const Gameboard = (() => {
      let index = 0;
      let board = {
        cells: [],
      }

      const _placeCells = (() => {
          Array.from(document.querySelectorAll("#gameboard-container > div"))
            .forEach(element => {
            element.value = index++;
            element.classList.add('cell')
            board.cells.push(element);
          })
        })();

        const _clearCells = (() => {
          const clearBtn = document.querySelector('#clear');
          clearBtn.addEventListener('click', () => {
            window.location.reload();
          })
        })();

      return {
        board,
        _placeCells,
        _clearCells 
      }
    })();

    

const gamePlay = (() => {
  let turn = false; 
  let winner = '';
  let tie = 0;
  const cells =  Gameboard.board.cells;
   
  const playerOne = () => document.getElementById('player-one').value;
  const playerTwo = () => document.getElementById('player-two').value;

  const start = (() => {
      document.getElementById('start').addEventListener('click', () => {
        alert(`May the best one win, ${playerOne()} is X and ${playerTwo()} is O!`)
      })
    })();
          cells.forEach(element => {  
            element.addEventListener('click', (e) => {
            tie++;
            if (!winner) {
                if (tie == 9) {
                  console.log('tie')
                }
                if (!turn && !e.target.classList.contains('O')) {
                  e.target.classList.add('X');
                  turn = true;
                  }
                else if (turn && !e.target.classList.contains('X')) {
                  e.target.classList.add('O');
                  turn = false;
                  }}
          });
    });
      
      const checkWin = () => {
          let rowOne = 
          [cells[0], cells[1], cells[2]];
          let rowTwo = 
          [cells[3], cells[4], cells[5]];
          let rowThree = 
          [cells[6], cells[7], cells[8]];
          let columnOne = 
          [cells[0], cells[3], cells[6]];
          let columnTwo = 
          [cells[1], cells[4], cells[7]];
          let columnThree = 
          [cells[2], cells[5], cells[8]];
          let diagonalOne = 
          [cells[0], cells[4], cells[8]];
          let diagonalTwo = 
          [cells[2], cells[4], cells[6]];

          let win = [rowOne, rowTwo, rowThree, columnOne, columnTwo, columnThree, diagonalOne, diagonalTwo];
          
            win.forEach(element => { 
              element.map((i) => { 
                if (i.classList.contains('X') && !element.includes('O')) {
                element.push('X')
                  if (element.length > 5) {
                    winner = 'X';
                    console.log('WUBBAWUBDUB X wins', winner);
                    alert(`${playerOne()} wins`)
                    return winner;
                    }
                  }
                if (i.classList.contains('O') && !element.includes('X')) {
                element.push('O')
                  if (element.length > 5) {
                    winner = 'O';
                    console.log('WUBBAWUBDUB O wins', winner);
                    alert(`${playerTwo()} wins`)
                    return winner;
                    }
                  }
              })
            })
    };

    document.body.addEventListener('click', () => {!winner ? checkWin() : false});
    
    return {
      turn,
      checkWin
    }
})();


const playAgainstAI = () => {

}