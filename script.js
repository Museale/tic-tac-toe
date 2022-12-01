// (function () {
//   const Gameboard = (() => {
//       let index = 0;
//       let board = {
//         cells: [],
//       }

//       const _placeCells = (() => {
//           Array.from(document.querySelectorAll("#gameboard-container > div"))
//             .forEach(element => {
//             element.value = index++;
//             element.classList.add('cell')
//             board.cells.push(element);
//           })
//         })();

//         const _clearCells = (() => {
//           const clearBtn = document.querySelector('#clear');
//           clearBtn.addEventListener('click', () => {
//             window.location.reload();
//           })
//         })();

//       return {
//         board,
//         _placeCells,
//         _clearCells 
//       }
//     })();

    

// const gamePlay = (() => {
//   let turn = false; 
//   let winner = '';
//   let tie = 0;
//   const cells =  Gameboard.board.cells;

  
//   const modal = () => document.getElementById('modal');
//   const modalPara = () => document.getElementById('modal-para');
//   const computerBtn = () => document.getElementById('computer-btn');
//   const clearBtn = () => document.getElementById('clear');
//   const gameboardContainerDivs = () => document.querySelectorAll('#gameboard-container > div');
//   const playerOne = () => document.getElementById('player-one').value;
//   const playerTwo = () => document.getElementById('player-two').value;

//   const start = (() => {
//       document.getElementById('start').addEventListener('click', () => {
//         modalPara().textContent = `May the best one win, ${playerOne()} is X and ${playerTwo()} is O!`;
//         modal().style = "opacity: 1"
//       })
//     })();
//           cells.forEach(element => {  
//             element.addEventListener('click', (e) => {
//             tie++;
//             if (!winner) {
//                 if (tie == 9) {
//                   console.log('tie')
//                   modalPara().textContent = "EVERYBODY'S A LOSER."
//                   modal().style = "opacity: 1"
//                 }
//                 if (!turn && !e.target.classList.contains('O')) {
//                   e.target.classList.add('X');
//                   turn = true;
//                   }
//                 else if (turn && !e.target.classList.contains('X')) {
//                   e.target.classList.add('O');
//                   turn = false;
//                   }}
//           });
//     });
//       //Create new arrays for each winning posibility

//       const checkWin = () => {
//           let rowOne = 
//           [cells[0], cells[1], cells[2]];
//           let rowTwo = 
//           [cells[3], cells[4], cells[5]];
//           let rowThree = 
//           [cells[6], cells[7], cells[8]];
//           let columnOne = 
//           [cells[0], cells[3], cells[6]];
//           let columnTwo = 
//           [cells[1], cells[4], cells[7]];
//           let columnThree = 
//           [cells[2], cells[5], cells[8]];
//           let diagonalOne = 
//           [cells[0], cells[4], cells[8]];
//           let diagonalTwo = 
//           [cells[2], cells[4], cells[6]];

//           let win = [rowOne, rowTwo, rowThree, columnOne, columnTwo, columnThree, diagonalOne, diagonalTwo];

//           //map through each element in the win array and check if length is 6

//             win.forEach(element => { 
//               element.map((i) => { 
//                 if (i.classList.contains('X') && !element.includes('O')) {
//                 element.push('X')
//                   if (element.length > 5) {
//                     winner = 'X';
//                     console.log('WUBBAWUBDUB X wins', winner);
//                     modal().style = "opacity: 1";
//                     modalPara().textContent = `Congratulations ${playerOne()} X WINS!`;
//                     return winner;
//                     }
//                   }
//                 if (i.classList.contains('O') && !element.includes('X')) {
//                 element.push('O')
//                   if (element.length > 5) {
//                     winner = 'O';
//                     console.log('WUBBAWUBDUB O wins', winner);
//                     modalPara().textContent = `Congratulations ${playerTwo()} O WINS!`;
//                     modal().style = "opacity: 1";
//                     return winner;
//                     }
//                   }
//               })
//             })
//     };

//     document.body.addEventListener('click', () => {!winner ? checkWin() : false});
    
//     return {
//       turn,
//       checkWin
//     }
// })();



// // const getElements = () => {
// //   const getModal = () => document.getElementById('modal');
// //   const getPlayerOne = () => document.getElementById('player-one').value;
// //   const getPlayerTwo = () => document.getElementById('player-two').value;
// //   return {
// //     getModal,
// //     getPlayerOne,
// //     getPlayerTwo
// //   }
// // }

// })()


(function () {
  let index = 0;
  let tie = 0;
  let winner = '';
  let turn = false;
  const gameBoard = {

    cells: [],
    
    init: function () {
      this.cacheDom();
      this.placeCells();
      this.bindEvents();
    },

    cacheDom: function () {
      this.modal= document.getElementById('modal');
      this.modalPara = document.getElementById('modal-para');
      this.computerBtn = document.getElementById('computer-btn');
      this.clearBtn = document.getElementById('clear');
      this.startBtn =  document.getElementById('start');
      this.gameboardContainerDivs = document.querySelectorAll('#gameboard-container > div');
      this.playerOne = () => document.getElementById('player-one').value;
      this.playerTwo =   () => document.getElementById('player-two').value;
    },

    placeCells: function (){
      Array.from(this.gameboardContainerDivs).forEach(element => {
          element.value = index++;
          element.classList.add('cell');
          this.cells.push(element);
        console.log(gameBoard.cells)
      });
    },
   
    bindEvents: function () {
      this.clearBtn.addEventListener('click', () => {
        window.location.reload();
      });
      this.startBtn.addEventListener('click', () => {
        this.modal.style = 'opacity: 1';
        this.modalPara.textContent =  `May the best one win ${playerOne} is X and ${playerTwo} is O`;
      });
      this.cells.forEach(element => {
        element.addEventListener('click', (e) => {
          this.checkWin(e);
        })
      });
      document.body.addEventListener('click', () => !winner ? this.checkWin() : false);
   
    }, 



    checkWin: function (e) {
      this.cells.forEach(element =>  {
        tie++;
        if (!winner) {
          if (tie == 9) {
            console.log('tie')
            this.modalPara.textContent = "EVERYBODY'S A LOSER."
            this.modal.style = "opacity: 1"
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

      Array.from(this.win).forEach(element => {
        Array.from(element).map((i) => {
          if (i.classList.contains('X') && !element.includes('O')) {
            element.push('X')
              if (element.length > 5) {
                this.winner = 'X';
                console.log('WUBBAWUBDUB X wins', winner);
                this.modal.style = "opacity: 1";
                this.modalPara.textContent = `Congratulations ${playerOne()} X WINS!`;
                return this.winner;
                }
              }
            if (i.classList.contains('O') && !element.includes('X')) {
            element.push('O')
              if (element.length > 5) {
                winner = 'O';
                console.log('WUBBAWUBDUB O wins', winner);
                this.modalPara.textContent = `Congratulations ${playerTwo()} O WINS!`;
                this.modal.style = "opacity: 1";
                return winner;
                }
              }
        })
      })
},

  } 
   
  

gameBoard.init();
})();
