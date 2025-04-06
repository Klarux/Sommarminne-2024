import { shuffleDeck } from "../../deck/deckHandlers.js"
import { selectedCard, reshuffles, setSelectedCardTo, key, setReshufflesTo, moveHistory } from "../variables/state.js"
import { reshuffleOutput, cardSlots } from "../variables/domSelectors.js"
import { delay } from "../../general-functions/delayFunction.js"
import { activateButtons, disableButtons } from "../../general-functions/elementTogglers.js"
import { resetEmptySlots } from "../setupFunctions.js"
import { endGame, puzzleIsSolved } from "./endGameFunctions.js"

export async function redistributeCards() {
    disableButtons() //To prevent multiple async functions running at once

    let scrapDeck = []
    let solvedRow

    //Iterates through all card slots to remove cards that aren't correctly placed
    for (let i = 0; i < cardSlots.length; i++) {
        //Resets solvedRow for each new row
        if (i % 14 == 0) solvedRow = true

        const cardElement = cardSlots[i].firstChild

        //Checks if slot is empty
        if (!cardElement) {
            solvedRow = false //Marks row as unsolved following empty slot
            continue
        }

        if (cardElement.alt == key[i] && solvedRow) continue //Skip solved parts
        solvedRow = false 

        if (cardElement) { //Will skip over empty slots as cardImage will be null (firstChild of an empty node)
            scrapDeck.push({image: cardElement}) //Adds card to scrapDeck
            cardElement.remove() //Removes card from slot
        }  
    }

    //Deselects selected card if one exists
    if (selectedCard) {
        selectedCard.classList.remove('selected') //Removes styling
        setSelectedCardTo(null)
    }

    await delay(500) //For dramatic effect

    scrapDeck = shuffleDeck(scrapDeck) //Shuffle the scrapDeck

    //Loop to display cards of scrapDeck
    for (let i = 0; i < cardSlots.length; i++) {
        if (cardSlots[i].firstChild || i % 14 == 13) continue //Skips filled slots & last of row
        await delay(50) //Oh the drama :O
        cardSlots[i].append(scrapDeck.pop().image) //Displays card in slot
    }

    //Resets empty slots and move history
    moveHistory.length = 0 //Just clears it of content
    resetEmptySlots()

    //Increments and displays reshuffles
    setReshufflesTo(reshuffles + 1)
    reshuffleOutput.innerText = 'Reshuffles: ' + reshuffles

    if (puzzleIsSolved()) endGame()

    activateButtons()
}