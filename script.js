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
            e.target.classList.add('X');
            turn = true;
            }
          else if (turn && !e.target.classList.contains('X')) {
            e.target.classList.add('O');
            turn = false;
            }
          });
        return {
          turn 
        };
});
})();


// let checkWin = ()=> {
//   const cells = Gameboard.board.cells;

//   const win =  (array, start, nth) => {
//     for (let i = 0; i < array.length; i += nth) {
//          if (array[i].classList.contains('X') && !winnerX.includes(array[i])) {
//           winnerX.push(array[i]);
//          }
     
//         }
//     for (let i = 0; i < array.length; i += nth) {
//       if (array[i].classList.contains('O') && !winnerO.includes(array[i])) {
//        winnerO.push(array[i]);
//       }
//     }
 
//   }
  


const checkWin = (() => {
  let winner = [];
  const cells = Gameboard.board.cells;
  const win =  (array, start, nth) => {
    for (let i = start; i < array.length; i += nth) {
         if (array[i].classList.contains('X') && !winner.includes(array[i])) {
         
         }
        
         }
         }
     
        
    // for (let i = start; i < array.length; i += nth) {
    //   if (array[i].classList.contains('O') && !winnerO.includes(array[i])) {
    //    winnerO.push(array[i]);
    //   }
    // }
        


        document.body.addEventListener('click', () => {

    win(cells, 0, 1);
    win(cells, 0, 2);
    win(cells, 0, 3);
})})()