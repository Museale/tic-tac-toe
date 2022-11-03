const Gameboard = (() => {

      let index = 0;
      
      let board = {
        cells: [],
      }
      const _placeCells = (() => {
          Array.from(document.querySelectorAll("#gameboard-container > div"))
            .forEach(element => {
            element.id = index++;
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
          // console.log(board.cells)
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

const playerOne = PlayerFactory('Jeff', 'X');
const playerTwo = PlayerFactory('Muta', 'O');

const gamePlay = (() => {
      let turn = false; 
      Gameboard.board.cells.forEach(element => { 
        element.addEventListener('click', (e) => {
       if (!turn && !e.target.classList.contains('O')) {
            e.target.classList.add('X');
            turn = true;
            checkWin() 
            }
          else if (turn && !e.target.classList.contains('X')) {
            e.target.classList.add('O');
            turn = false;
            checkWin() 
            }
          });

        return {
          turn 
        };
});
})();

//Check winner, should check for three in a row and a tie

//if 0, 1, 2 === equal - win
//if 3, 4, 5 === equal - win
//if 6, 7, 8 === equal - win

//if 0, 3, 6 === equal - win
//if 1, 4, 7 === equal - win
//if 2, 5, 8 === equal - win

//if 0, 4, 8 === equal - win
//if 2, 4, 6 === equal - win

//if none of the above & 8 cells marked === tie


//would it be eaier to make one array for each row and one for each column, and then two for diagonals?
//Or should I hardcode a check for each 
//use splice,filter to make new arrays of the main array to check for tie or win?


//if three in column or row 1 


// function checkWin () {
//   const cells = Gameboard.board.cells;
//     let winnerArr = [];
  // if (cells[0].classList.contains('X') 
  //   && cells[1].classList.contains('X') 
  //   && cells[2].classList.contains('X')) {
  //   console.log('winner')
    
  // }
  // const win =  (array, nth) => {
  
  //   for (let i = 0; i < array.length; i += nth) {
  //     winnerArr.push(array[i]);
  //     console.log(winnerArr)
  //   }
  
  //   cells.map(item => { 
  //     item.classList.contains('X') ?
  //      xWinnerArr.push(item) 
  //     : false
  //     })
  //     console.log(xWinnerArr)
  // }
    
    
  //      item.classList.contains('X') ? console.log(item) : false })
  // // };
  // const oWin = () => {
  //   cells.filter(item => { 
  //     item.classList.contains('O') ? console.log(item, 'these are o') : false})
  // }
  // }
// }
//   win(cells, 3);
//   return {
//     winnerArr
//   }
  // oWin();
// };