import { checkWin, initGame, moveToken, rollDie } from "../lib/game.ts";

const BOARD_SIZE: number = 100;
const POSITION: number = 1;

function main(): void {
  const play: boolean = confirm("Do you want to play Snakes and Ladders?");

  if (play) {
    let gameState = initGame(POSITION, BOARD_SIZE);

    while (!checkWin(gameState)) {
      const takeTurn: boolean = confirm("Do you want to roll the die?");

      if (takeTurn) {
        const dieRoll: number = rollDie();
        gameState = moveToken(gameState, dieRoll);

        console.log(gameState.message);
      } else {
        console.log("Thank you for playing!");
        break;
      }
    }
  }
}

main();
