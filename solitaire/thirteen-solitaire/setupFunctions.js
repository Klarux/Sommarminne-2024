import { generateDeck, shuffleDeck } from "../deck/deckHandlers.js"
import { delay } from "../general-functions/delayFunction.js"
import { cardSlots } from "./variables/domSelectors.js"
import { deck, emptySlots } from "./variables/state.js"

async function distributeCards() {
    deck.length = 0 //Clearing deck
    deck.push(...shuffleDeck(generateDeck())) //Generating + shuffling new deck

    //Displaying the deck's card in all but 4 empty slots
    for (let i = 0; i < cardSlots.length; i++) {
        await delay(50) // Delay for dramatic effect :)
        if (cardSlots[i].firstChild) {continue} //Skipping non-empty slots
        if (i % 14 == 13) { continue } //Skipping the last slot in each row
        cardSlots[i].append(deck.pop().image) //Removes 1 card from deck + places it in a slot
    }
}

//Function that clears the emptySlots array of content then adds slotElements from the last column as these are the standard emptySlots
function resetEmptySlots() {
    emptySlots.length = 0 
    emptySlots.push(cardSlots[13], cardSlots[27], cardSlots[41], cardSlots[55]) 
}

//Goal of game is to sort the deck, therefore the key is very similar to an unshuffled deck with one caveat...


export {distributeCards, resetEmptySlots }