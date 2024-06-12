const prompt = require("prompt-sync")();

const rows = 3;
const col = 3;

const SYMBOL_COUNT = {
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

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < col; i++) {
    reels.push([]);
    const reelsymbol = [...symbols];
    for (let j = 0; j < rows; j++) {
      const randomIndex = Math.floor(Math.random() * reelsymbol.length);
      const selectedSymbol = reelsymbol[randomIndex];
      reels[i].push(selectedSymbol);
      reelsymbol.splice(randomIndex, 1);
    }
  }
  return reels;
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit Numbr: ");
    const NumberDepositAmt = parseFloat(depositAmount);
    if (isNaN(NumberDepositAmt) || NumberDepositAmt <= 0) {
      console.log("Invaldi amout,try again");
    } else {
      return NumberDepositAmt;
    }
  }
};

const getNumberofLines = () => {
  while (true) {
    const lines = prompt("Enter number of lines ot bet on(1-3): ");
    const numberOflines = parseFloat(lines);
    if (isNaN(numberOflines) || numberOflines <= 0 || numberOflines > 3) {
      console.log("Invalid number of lines,try again");
    } else {
      return numberOflines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the total bet per line: ");
    const numberbet = parseFloat(bet);

    if (isNaN(numberbet) || numberbet < 0 || numberbet > balance / lines) {
      console.log("Invalid bet,try again");
    } else {
      return numberbet;
    }
  }
};

const transpose = (reels) => {
  const Rows = [];
  for (let i = 0; i < rows; i++) {
    Rows.push([]);
    for (let j = 0; j < col; j++) {
      Rows[i].push(reels[j][i]);
    }
  }

  return Rows;
};

const printRows = (Rows) => {
  for (const iterator of Rows) {
    let rowString = "";
    for (const [i, symbol] of iterator.entries()) {
      rowString += symbol;
      if (i != iterator.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const getWinnings = (Rows, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = Rows[row];
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
  while (true) {
    console.log("You have a balance of $" + balance);
    const numlines = getNumberofLines();
    const bet = getBet(balance, numlines);
    balance -= bet * numlines;
    const reels = spin();
    console.log(reels);
    const transposeRows = transpose(reels);
    console.log(transposeRows);
    printRows(transposeRows);
    const winnings = getWinnings(transposeRows, bet, numlines);
    balance += winnings;
    console.log("You won,$" + winnings.toString());

    if (balance <= 0) {
      console.log("You ran out of money");
      break;
    }

    const playAgain = prompt("Do you want to spin again (y/n)?");

    if (playAgain != "y") {
      break;
    }
  }
};

game();
