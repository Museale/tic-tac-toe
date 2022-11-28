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

const PlayerFactory = (name, marker) => {
      const getMarker = () => marker;
      const getName = () => name;
        return {
          getMarker,
          getName,
        }
};

const gamePlay = (() => {
      let turn = false; 
      Gameboard.board.cells.forEach(element => {  
        element.addEventListener('click', (e) => {
       if (!turn && !e.target.classList.contains('O')) {
          e.target = {
            marker: 'X',
          }
          console.log(e.target);           
           e.target.classList.add('X');
            turn = true;
            }
          else if (turn && !e.target.classList.contains('X')) {
            e.target.classList.add('O');
            turn = false;
            }
          });
       
});

  let checkWin = () => {
    const cells =  Gameboard.board.cells;
    
       let rowOne = [cells[0], cells[1], cells[2]];
       let rowTwo = [cells[3], cells[4], cells[5]];
       let rowThree = [cells[6], cells[7], cells[8]];
       let columnOne = [cells[0], cells[3], cells[6]];
       let columnTwo = [cells[1], cells[4], cells[7]];
       let columnThree = [cells[2], cells[5], cells[8]];
       let diagonalOne = [cells[0], cells[4], cells[8]];
       let diagonalTwo = [cells[2], cells [4], cells[6]];

       let win =  [rowOne, rowTwo, rowThree, columnOne, columnTwo, columnThree, diagonalOne, diagonalTwo];
       console.log(win)
   
       
        win.forEach(element => {
      

          element.map((i) => { 
         
            if (i.classList.contains('X') && !element.includes('O')) {
            element.push('X')
              if (element.length > 5) {
                console.log('WUBBAWUBDUB X wins');
                return;
              }
            }
          
          if (i.classList.contains('O') && !element.includes('X')) {
            element.push('O')
            if (element.length > 5) {
              console.log('WUBBAWUBDUB O wins');
              return;
            }
            }
          
          })
          
        })

       
};
document.body.addEventListener('click', () => {checkWin()});
 return {
  turn,
  checkWin
 }
})();

