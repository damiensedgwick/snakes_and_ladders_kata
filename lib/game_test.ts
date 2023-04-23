import { assertEquals } from "https://deno.land/std@0.184.0/testing/asserts.ts";

import { GameState, moveToken } from "./game.ts";

const createTestGame = (partialState: Partial<GameState>): GameState => {
  return {
    position: 1,
    isWon: false,
    boardSize: 100,
    message: "Welcome to Snakes and Ladders!",
    ...partialState,
  };
};

Deno.test("Given the game is started, when the token is placed on the board, then the token is on square 1", () => {
  const gameState = createTestGame({});

  assertEquals(gameState.position, 1);
});

Deno.test("Given the token is on square 1, when the token is moved 3 spaces, then the token is on square 4", () => {
  let gameState = createTestGame({});

  gameState = moveToken(gameState, 3);

  assertEquals(gameState.position, 4);
});

Deno.test("Given the token is on square 1, when the token is moved 3 spaces, and then it is moved 4 spaces, then the token is on square 8", () => {
    let gameState = createTestGame({});

    gameState = moveToken(gameState, 3);
    gameState = moveToken(gameState, 4);

    assertEquals(gameState.position, 8);
});
