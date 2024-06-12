# Slot Machine Game

This is a simple slot machine game implemented in JavaScript. The game allows users to deposit money, place bets, spin the reels, and win money based on the outcome.

## Features

- Deposit money to start playing
- Choose the number of lines to bet on (1-3)
- Place a bet per line
- Spin the reels and see the outcome
- Win money if the symbols on the bet lines match
- Continue playing until you run out of money or choose to stop

## How to Play

1. **Deposit Money**: Enter the amount of money you want to deposit.
2. **Choose Lines**: Choose the number of lines you want to bet on (1 to 3).
3. **Place Bet**: Enter the amount you want to bet per line.
4. **Spin the Reels**: The reels will spin and display the outcome.
5. **Win or Lose**: If the symbols on a line match, you win money based on the symbol values and your bet.
6. **Continue or Stop**: You can continue playing as long as you have money left, or you can choose to stop.

## Symbol Values

- `A` is worth 5 points
- `B` is worth 4 points
- `C` is worth 3 points
- `D` is worth 2 points

## Symbol Count

- `A` appears 2 times on each reel
- `B` appears 4 times on each reel
- `C` appears 6 times on each reel
- `D` appears 8 times on each reel

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/slot-machine-game.git
    ```

2. **Navigate to the project directory**:
    ```sh
    cd slot-machine-game
    ```

3. **Install dependencies**:
    ```sh
    npm install prompt-sync
    ```

## Running the Game

To run the game, use the following command:

```sh
node your-script-name.js
