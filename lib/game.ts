export type GameState = {
  readonly position: number;
  readonly isWon: boolean;
  readonly boardSize: number;
  readonly message: string;
  readonly snakes: Snake[];
};

type Snake = {
  readonly head_position: number;
  readonly snake_length: number;
}

export const snakes: Snake[] = [
  {
    head_position: 12,
    snake_length: 10
  },
  {
    head_position: 27,
    snake_length: 10
  },
];


export const initGame = (position: number, boardSize: number): GameState => {
  return {
    position,
    isWon: false,
    boardSize,
    snakes,
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
  const snake = gameState.snakes.find(snake => snake.head_position === newPosition);

  if (snake) {
    return {
      ...gameState,
      position: newPosition - snake.snake_length,
      message: generateErrorMessage(dieRoll),
    }
  }

  if (rolledTooHigh) {
    return {
      ...gameState,
      message: generateErrorMessage(dieRoll),
    };
  }

  if (hasWonGame) {
    return {
      ...gameState,
      position: newPosition,
      isWon: true,
      message: generateWinMessage(dieRoll, newPosition)
    };
  }

  return {
    ...gameState,
    position: newPosition,
    message: generateDefaultMessage(dieRoll, newPosition),
  };
};

const generateWinMessage = (dieRoll: number, newPosition: number) => {
  return `You have rolled a ${dieRoll} and moved to square ${newPosition}. You have won!`;
};

const generateErrorMessage = (dieRoll: number) => {
  return `You have rolled a ${dieRoll}, which is too high. Please try again.`;
};

const generateDefaultMessage = (dieRoll: number, newPosition: number) => {
  return `You have rolled a ${dieRoll} and moved to square ${newPosition}.`;
};

export const checkWin = (gameState: GameState): boolean => {
  return gameState.isWon;
};



