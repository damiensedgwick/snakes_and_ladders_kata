export type GameState = {
  readonly position: number;
  readonly isWon: boolean;
  readonly boardSize: number;
  readonly message: string;
};

export const initGame = (position: number, boardSize: number): GameState => {
  return {
    position,
    isWon: false,
    boardSize,
    message: "Welcome to Snakes and Ladders!",
  };
};

export const rollDie = (): number => {
  return Math.floor(Math.random() * 6) + 1;
};

export const moveToken = (gameState: GameState, dieRoll: number): GameState => {
  const newPosition: number = gameState.position + dieRoll;
  const rolledTooHigh: boolean = newPosition > gameState.boardSize;
  const hasWonGame: boolean = newPosition === gameState.boardSize;

  if (rolledTooHigh) {
    return {
      ...gameState,
      message:
        `You have rolled a ${dieRoll}, which is too high. Please try again.`,
    };
  }

  if (hasWonGame) {
    return {
      ...gameState,
      isWon: true,
      message:
        `You have rolled a ${dieRoll} and moved to square ${newPosition}. You have won!`,
    };
  }

  return {
    ...gameState,
    position: newPosition,
    message: `You have rolled a ${dieRoll} and moved to square ${newPosition}.`,
  };
};
