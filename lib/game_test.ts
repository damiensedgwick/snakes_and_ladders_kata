import { assertEquals } from "https://deno.land/std@0.184.0/testing/asserts.ts";

import { GameState, moveToken, rollDie, snakes } from "./game.ts";

const createTestGame = (overrides: Partial<GameState>): GameState => {
  return {
    position: 1,
    isWon: false,
    boardSize: 100,
    message: "Welcome to Snakes and Ladders!",
    snakes,
    ...overrides,
  };
};

Deno.test("Given the game is started, when the token is placed on the board, then the token is on square 1", () => {
  const gameState: GameState = createTestGame({});

  assertEquals(gameState.position, 1);
});

Deno.test("Given the token is on square 1, when the token is moved 3 spaces, then the token is on square 4", () => {
  let gameState: GameState = createTestGame({});

  gameState = moveToken(gameState, 3);

  assertEquals(gameState.position, 4);
});

Deno.test("Given the token is on square 1, when the token is moved 3 spaces, and then it is moved 4 spaces, then the token is on square 8", () => {
  let gameState: GameState = createTestGame({});

  gameState = moveToken(gameState, 3);
  gameState = moveToken(gameState, 4);

  assertEquals(gameState.position, 8);
});

Deno.test("Given the token is on square 97, when the token is moved 4 spaces, then the token is on square 97, and the player has not won the game", () => {
  let gameState: GameState = createTestGame({ position: 97 });

  gameState = moveToken(gameState, 4);

  assertEquals(gameState.position, 97);
  assertEquals(gameState.isWon, false);
});

Deno.test("Given the token is on square 97, when the token is moved 3 spaces, then the token is on square 100, and the player has won the game", () => {
  let gameState: GameState = createTestGame({ position: 97 });

  gameState = moveToken(gameState, 3);

  assertEquals(gameState.position, 100);
  assertEquals(gameState.isWon, true);
});

Deno.test("Given the game is started, when the player rolls a die, then the result should be 1-6 inclusive", () => {
  const roll: number = rollDie();

  assertEquals(roll >= 1 && roll <= 6, true);
});

Deno.test("Given the player rolls a 4, when they move their token, then the token should move 4 spaces", () => {
  let gameState: GameState = createTestGame({});

  gameState = moveToken(gameState, 4);

  assertEquals(gameState.position, 5);
});

Deno.test("As a player I want snakes to move my token down so that the game is more fun", () => {
  let gameState: GameState = createTestGame({position: 10});

  gameState = moveToken(gameState, 2) // position 12

  assertEquals(gameState.position, 2); // gone back ten spaces
});

Deno.test("Given there is a snake connecting squares 2 and 12 When the token lands on square 2 Then the token is on square 2", () => {
  let gameState: GameState = createTestGame({});

  gameState = moveToken(gameState, 1);

  assertEquals(gameState.position, 2);
});

Deno.test("Given I land on the 2nd snake, I move down to the bottom of that snake", () => {
  let gameState: GameState = createTestGame({ position: 25 });

  gameState = moveToken(gameState, 2);

  assertEquals(gameState.position, 17);
});
