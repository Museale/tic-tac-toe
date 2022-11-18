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



function checkWin () {
  const cells = Gameboard.board.cells;
    let winnerArr = [];
    let xWinnerArr=[];

// for (let i = 0; i < cells.length; i += nth) {
//    if (cells[i].classList.contains('X') && winnerArr.length < 3) {
//     winnerArr.push(cells[i]);
//     console.log(winnerArr)
//    } else if (winnerArr > 3) {
//     console.log("X WINS")
//    }
//    }
  // if (cells[0].classList.contains('X') 
  //   && cells[1].classList.contains('X') 
  //   && cells[2].classList.contains('X')) {
  //   console.log('winner')
  // }

  let firstRow = cells.slice(0,3);
  let secondRow = cells.slice(3,6);
  let thirdRow = cells.slice(6, 9);
  // let firstColumn = cells.pop(0, 3, 6);
  // console.log(firstColumn)

function checkClass (array, marker) {
  array.map(item => item.classList.contains(marker) && marker === 'X' ? array.push(item) : false);
  if  (array.length >= 6) {
    console.log(marker, 'Wins everything now')
  }
}

checkClass(firstRow, 'X');
checkClass(secondRow, 'X');
checkClass(thirdRow, 'X');


//  if (firstRow.length >= 6 || secondRow.length >= 6 || thirdRow.length >= 6) {
//   console.log('X WINS ALL')
//  }

//   const win =  (array, nth) => {
//     for (let i = 0; i < array.length; i += nth) {
//       winnerArr.push(array[i]);
//       console.log(i)
//     }
  
// if(winnerArr[0].classList.contains('X')) {
//   console.log("hello")
// }
//    
//       console.log(xWinnerArr)
//       // item.classList.contains('X') ? console.log(item) : false 
//   }
    
//   const oWin = () => {
//     cells.filter(item => { 
//       item.classList.contains('O') ? console.log(item, 'these are o') : false})
//   }
  
//   oWin();
//   win(cells, 3);
//   win(cells, 2);
//   win(cells, 4)

//   return {
//     winnerArr
//   }
}