import { dimmer, gameOverPopup, redistributeButton, resetButton, resetPopup, undoButton } from "../thirteen-solitaire/variables/domSelectors.js";

export function disableButtons() {
    redistributeButton.setAttribute('disabled', true)
    resetButton.setAttribute('disabled', true)
    undoButton.setAttribute('disabled', true)
}

export function activateButtons() {
    redistributeButton.removeAttribute('disabled')
    resetButton.removeAttribute('disabled')
    undoButton.removeAttribute('disabled')
}

export function toggleResetPopup() {
    dimmer.classList.toggle('hidden')
    resetPopup.classList.toggle('hidden')
}

export function toggleEndPopup() {
    dimmer.classList.toggle('hidden')
    gameOverPopup.classList.toggle('hidden')
}

//Only addresses buttons that affect game :) 