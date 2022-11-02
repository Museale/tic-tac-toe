const Gameboard = (() => {
  let index = 0;
  let board = {
    cells: [],
  }
  const _placeCells = (() => {
      Array.from(document.querySelectorAll("#gameboard-container > div")).forEach(element => {
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
      console.log(board.cells)
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
     }
     else if (turn && !e.target.classList.contains('X')) {
        e.target.classList.add('O');
        turn = false;
     }
      });
  return {
    turn 
  }
})})();

