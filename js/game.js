'use strict'


var gBoard

const gGame = {
    score: 0,
    isOn: false
}

function init() {


    gBoard = buildBoard()
    renderBoard(gBoard, '.board')

    console.log(gBoard);
}


function buildBoard() {
    const size = 4
    var board = []

    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
            board[i].push([])
        }
    }

    return board
}
