import { cardSlots, moveOutput, reshuffleOutput } from "../variables/domSelectors.js";
import { setReshufflesTo, setSelectedCardTo, selectedCard, moveHistory, setMovesTo, reshuffles, moves } from "../variables/state.js";
import { delay } from "../../general-functions/delayFunction.js";
import { activateButtons, disableButtons } from "../../general-functions/elementTogglers.js";
import { resetEmptySlots, distributeCards } from "../setupFunctions.js";

export async function resetGame() {
    disableButtons() //Again, only one async function gets to run at once

    cardSlots.forEach(slot => slot.innerHTML = '') //Clears all cardSlots

    if (selectedCard) {
        selectedCard.classList.remove('selected')
        setSelectedCardTo(null) //Deselects card
    }
    
    await delay(500) // The DramaLlama???

    // Reset count for moves and reshuffles and remove counter from html
    setMovesTo(0) 
    moveOutput.innerText = 'Moves: ' + moves
    setReshufflesTo(0) 
    reshuffleOutput.innerText = 'Reshuffles: ' + reshuffles


    await distributeCards() 

    moveHistory.length = 0
    resetEmptySlots() 

    activateButtons()
}