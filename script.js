const Gameboard = (() => {
  let board = {
    cells: [],
  }
  
  return {
    board
  }
})();

const placeCells = (() => {
 const container = document.querySelectorAll("#gameboard-container > div");
 let index = 0;
 
Array.from(container).forEach(element => {
  element.id = index++;
  Gameboard.board.cells.push(element);
  element.classList.add('board')
    element.addEventListener('click', (e) => {
      console.log(e.target)
      });
      console.log(Gameboard.board.cells);
  });
}
)();
