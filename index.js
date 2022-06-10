function createGame({ j0 = '-', j1 = 'x', j2 = 'o', preloadedCoord, debug = false }, onFinished) {
    const board = preloadedCoord != undefined ? preloadedCoord : Array.from({ length: 9 }, () => j0)
    let round = j1

    function play(coord) {
        if (!coordIsEmpty(coord)) {
            printDebug('A coordenada já foi jogada!')
            return false
        }
        
        board[coord] = round
        printDebug(`Jogador da vez: ${round}\nPosição jogada: ${coord}\n${getBoard()}`)
        checkFinished()

        round = round === j1 ? j2 : j1
        return true
    }

    function coordIsEmpty(coord) {
        return board[coord] === j0
    }

    function checkFinished() {
        const winner = getWinner()

        if (winner !== j0) {
            printDebug(`Partida finalizada!\nResultado: ${winner}`)
            if(onFinished !== undefined) onFinished(winner)
        }
    }

    function getWinner() {
        const unplayedPositions = board.filter((coord) => coord === j0)

        if (unplayedPositions.length === 0)
            return j1.concat(j2)

        for (let i = 0; i < 9; i += 3)
            if (board[0 + i] !== j0 && board[0 + i] === board[1 + i] && board[1 + i] === board[2 + i])
                return board[1 + i]

        for (let i = 0; i < 3; i++)
            if (board[0 + i] !== j0 && board[0 + i] === board[3 + i] && board[3 + i] === board[6 + i])
                return board[3 + i]

        for (let i = 0; i < 4; i += 2)
            if (board[4] !== j0 && board[0 + i] === board[4] && board[4] === board[8 - i])
                return board[4]

        return j0
    }

    function getCoords() {
        return board
    }

    function getBoard() {
        return board.reduce((textBoard, _, i) =>
            textBoard + board[i] + ((i + 1) % 3 === 0 ? '\n' : ' '),
            ''
        )
    }

    function printDebug(...data) {
        if (debug) console.log(...data)
    }

    return {
        play,
        getBoard,
        getCoords,
        getWinner,
        coordIsEmpty
    }
}

module.exports = createGame