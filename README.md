# TicTacToe
This module aims to simulate the famous tic-tac-toe game

## How to install
Install the module through npm running the following code in your terminal.
```
npm install @fillipe143/ttt
```
Then import the module to your project by adding the following line
```node
const createGame = require('@fillipe143/ttt')
```

## How to use
To get started, create an instance of ```createGame```
```node
const game = createGame({})
```
Here you can pass some values as parameter
```node
const game = createGame({
    j0: '-', //Empty position
    j1: 'x', //Player 1
    j2: 'o', //Player 2
    debug: true //Displays real-time match information
})
```

## How to know when the game is over
To know if a game has reached the end, just pass a new argument in the ```createGame``` function, creating a function that receives the result of the game
```node
const game = createGame({}, (result) => {
    //If 'result' is the value of 'j1' then Player 1 won the game
    //If 'result' is the value of 'j2' then Player 2 won the game
    //If 'result' is the value of 'j1' plus 'j2' then a tie has occurred
    //If 'result has the value of 'j0' it means the game is not over yet
    
    switch (result) {
        case 'x':
            console.log('The "x" won')
            break
        case 'o':
            console.log('The "o" won')
            break
        case 'xo':
            console.log('There was a tie')
            break
    }
})
```
You can still use the 'getWinner' function to get the current status of the match
```node
    switch (game.getWinner()) { ... }
```

## How to play
To play in a certain position, use the 'play' function it receives as a parameter a number from 0 to 8 that represents a coordinate on the board <br>
```
Coordinates on the board
0 1 2
3 4 5
6 7 8
```

The 'play' function still returns a boolean value, which if false, means that the position has already been played before
```node
if (!game.play(1)) {
    console.log('Position has already been played')
}
```
The module also has other functions, namely:
1. ```coordIsEmpty```   Check if a certain position has been played
2. ```getBoard```       Returns a representation of the current board
3. ```getCoords```      Returns all 9 game coordinates
