// Gathering some elements from the DOM
const dimmer = document.querySelector('.dim')

const resetPopup = document.querySelector('.reset-popup')
const confirmResetButton = document.querySelector('#confirm-reset')
const cancelButton = document.querySelector('#cancel')

const gameOverPopup = document.querySelector('.game-over-popup')
const finalStatsOutput = document.querySelector('.final-stats-output')
const playAgainButton = document.querySelector('#play-again')

const thirteenGrid = document.querySelector('.thirteen-grid')
const cardSlots = Array.from(document.querySelectorAll('.card-slot'))

const redistributeButton = document.querySelector('#redistribute')
const resetButton = document.querySelector('#reset')
const undoButton = document.querySelector('#undo')

const reshuffleOutput = document.querySelector('.reshuffle-output')
const moveOutput = document.querySelector('.move-output')

const autoButton = document.querySelector('#auto')
const darkModeButton = document.querySelector('#dark-mode')

export {
    dimmer, resetPopup, confirmResetButton, cancelButton, 
    gameOverPopup, finalStatsOutput, playAgainButton,
    thirteenGrid, cardSlots, redistributeButton, resetButton,
    undoButton, reshuffleOutput, moveOutput, autoButton, 
    darkModeButton
}