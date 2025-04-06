import { toggleEndPopup } from "../../general-functions/elementTogglers.js"
import { cardSlots, finalStatsOutput } from "../variables/domSelectors.js"
import { key, moves, reshuffles } from "../variables/state.js"

function puzzleIsSolved() {
    let solved = true
    for (let i = 0; i < cardSlots.length; i++) {
        const cardElement = cardSlots[i].firstChild
        if (key[i] == null) continue
        if (cardElement) if (cardElement.alt == key[i]) continue
        solved = false
    }
    return solved    
}

function endGame() {
    toggleEndPopup()
    finalStatsOutput.innerText = `Congrats! You beat the game in ${moves} moves and ${reshuffles} reshuffles. Wanna play again?`
}

export { puzzleIsSolved, endGame }