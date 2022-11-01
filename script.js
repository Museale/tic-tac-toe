const Gameboard = (() => {
  let board = {
    cells: [],
    
  }
  console.log(board.cells, 'in top');
  return {
    board
  }
})();

const placeCells = (() => {
  const container = document.querySelectorAll("#gameboard-container > div");
    let index = 0;
    const cellArray = Array.from(container);
      cellArray.forEach(element => {
        element.id = index++;
        element.classList.add('cell')
        Gameboard.board.cells.push(element);
       
        });
        console.log(Gameboard.board.cells);
        return {
          container,
          cellArray
        }
      }
     
)();

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
// console.log(playerOne)

const gamePlay = (() => {
  let turn = false;
  placeCells.cellArray.forEach(
    element => { 
    element.addEventListener('click', (e) => {
      console.log(e.target);
      if (!turn && !e.target.classList.contains('O')) {
        
        e.target.classList.add('X');
       turn = true;
     }
     else if (turn && !e.target.classList.contains('X')){

      e.target.classList.add('O');
     turn = false;
     }
      });


  return {
    turn
  }
})})();

const winner = (() => {
   
})()