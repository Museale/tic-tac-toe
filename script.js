
// Gameboard module
const GameBoardModule = (() => {
    let gameBoard = {
      gameBoardArr:  (() => {
        let gameBoardCells = [];
        for (let i = 0; i < 9; i++) {
          let cell = document.createElement('div');
          cell.classList.add('cell');
          gameBoardCells.push(cell);
          }
        console.log(gameBoardCells)
      })(),
      } 
     return {
      gameBoard
     }
    
  })();
  
// Player factory module
const playerFactory = (username, number) => {

  const greetPlayer = () => console.log(`Good luck! ${username}. You are the ${number} player.`);
  return { 
      username, 
      number,
      greetPlayer 
  };
};

const playerOne = playerFactory ('Player One', 1);
const playerTwo = playerFactory('Player Two', 2);

playerOne.greetPlayer();
playerTwo.greetPlayer();

// Gameplay module 

const GamePlay = (() => {
    let play = {
      
    }
})();
// DisplayController module

































// //Write a factory function for players
