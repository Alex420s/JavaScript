/*
1.- Deposit some money
2-. Determie number of lines to bet on
3.- Collect a bet amount
4.- Spin the slot machine
5.- check if the use won 
6.- give the user their winnings 
7.- play again
*/
// impot the package or module to the program
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
// Object key -> value, symbols that you can possibly have in each reel.
const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const deposit = () => {
    // Only a valid number breack this loop.
  while (true) {
    // By default is a string, we need convert this to a number.
    const depositAmount = prompt("Inserta la cantidad a depositar: ");
    const numberDepositAmount = parseFloat(depositAmount);
    // Check if this is a valid number
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Deposito invalido, intenta de nuevo.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Ingresa el número de lineas a apostar (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Número invalido, intenta de nuevo.");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Ingresa la apuesta por linea: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Apuesta invalida, intenta de nuevo.");
    } else {
      return numberBet;
    }
  }
};
// randomly select  from an array and remove from the array every single time that we use them.
const spin = () => {
  
  // Array of all the available symbols that we can pick.
  const symbols = [];
  //  symbol => "A", count => 2
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  
  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    // Copy the symbols that we have available to choose for each real
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
        // The maximum possible number is (0-1) * (how many symbols we have.), but only a whole number (Math.floor).
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      // Add a symbol in our reel
      reels[i].push(selectedSymbol);
      // Remove the used symbol from the available symbol (index, elements to remove).
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};
// Convert all of our columns into all of our rows.
const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }

  return rows;
};
// Fancy formatting A | B | C 
const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }

  return winnings;
};

const game = () => {
  let balance = deposit();
    // If you don´t want to play anymore, then breack the loop
  while (true) {
    console.log("Tu saldo es $" + balance);
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    // Take the balance and subtract from it, the bet multiplied by the number of lines.
    balance -= bet * numberOfLines;
    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log("Ganaste, $" + winnings.toString());

    if (balance <= 0) {
      console.log("Te quedaste sin pasta!");
      break;
    }

    const playAgain = prompt("¿Quieres jugar de nuevo (y/n)? ");

    if (playAgain != "y") break;
  }
};

game();