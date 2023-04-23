# Snakes and Ladders Kata
This is a simple implementation of the Snakes and Ladders Kata in TypeScript (using Deno).

The Kata is described here: https://agilekatas.co.uk/katas/SnakesAndLadders-Kata

## Feature 1 - Moving Your Token
### Token Can Move Across the Board
*As a player I want to be able to move my token So that I can get closer to the goal:*

- [ ] Given the game is started, when the token is placed on the board, then the token is on square 1
- [ ] Given the token is on square 1, when the token is moved 3 spaces, then the token is on square 4
- [ ] Given the token is on square 1, when the token is moved 3 spaces, and then it is moved 4 spaces, then the token is 
on square 8

### Player Can Win the Game
*As a player I want to be able to win the game So that I can gloat to everyone around:*

- [ ] Given the token is on square 97, when the token is moved 3 spaces, then the token is on square 100, and the player
has won the game
- [ ] Given the token is on square 97, when the token is moved 4 spaces, then the token is on square 97, and the player
has not won the game

### Moves Are Determined By Dice Rolls
*As a player I want to move my token based on the roll of a die So that there is an element of chance in the game:*

- [ ] Given the game is started, when the player rolls a die, then the result should be 1-6 inclusive
- [ ] Given the player rolls a 4, when they move their token, them the token should move 4 spaces
