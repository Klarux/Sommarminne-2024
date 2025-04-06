import { cardSlots, moveOutput } from "../variables/domSelectors.js"
import { emptySlots, key, setSelectedCardTo, selectedCard, moveHistory, setMovesTo, moves, autoMove } from "../variables/state.js"
import { endGame, puzzleIsSolved } from "./endGameFunctions.js"


//Function that returns true or false (depending on... You guessed it!)
function moveIsAllowed(sourceSlot, targetSlot) { 
    const targetIndex = cardSlots.indexOf(targetSlot) //Getting index of the target
    const sourceCardName = sourceSlot.firstChild.alt //Getting name of selected card
            
    //Special rule for first column: move is allowed if card's name matches key
    if (targetIndex % 14 == 0) return (sourceCardName == key[targetIndex])

    const cardLeftOfTarget = cardSlots[targetIndex - 1].firstChild //Retrieves the card to the left of targetSlot 

    if (!cardLeftOfTarget) return false //Move not allowed if there is no card to the left (null being falsy)

    //Confusing gamerule but if selectedCard's predecessor is what's left of targetSlot, you may move the card
    const precedingCardName = key[key.indexOf(sourceCardName) - 1]
    return (cardLeftOfTarget.alt == precedingCardName) 
}

//The actual moving of card and updating of stuffs 
//(not incrementing history or movecount tho cause uh oh sometimes you move by undoing)
function moveCard(sourceSlot, targetSlot) {

    targetSlot.append(sourceSlot.firstChild) //Adds selectedCard's image to targeted slot
    sourceSlot.innerHTML = '' //Removes selectedCard's image
    
    for (let i in emptySlots) {
        if (emptySlots[i] == targetSlot) emptySlots[i] = sourceSlot
    }
}

function handleAutoMove(clickedSlot) {
    if (selectedCard) {
        selectedCard.classList.remove('selected')
        setSelectedCardTo(null)
    } //No need to use selectedCard when auto-moving since this function finds available move for selected

    if (clickedSlot.firstChild) { //Card was clicked
        //Check if any empty slot can accept the card, if so do the move
        for (const slot of emptySlots) {
            if (moveIsAllowed(clickedSlot, slot)) {
                moveCard(clickedSlot, slot)

                moveHistory.push({source: clickedSlot, target: slot})
                setMovesTo(moves + 1) //Incrementing movecount
                moveOutput.innerText = 'Moves: ' + moves

                if (puzzleIsSolved()) endGame()

                return //Make sure multiple moves aren't made from one click
            }
        }
    } else { //Empty slot was clicked
        //Iterates through the entire grid to find card that can move to clicked slot
        for (const cardSlot of cardSlots) {
            if (cardSlot.firstChild) { //Only checks slots that actually have cards, otherwise bugTown
                if (moveIsAllowed(cardSlot, clickedSlot)) {
                    moveCard(cardSlot, clickedSlot)

                    moveHistory.push({source: cardSlot, target: clickedSlot})
                    setMovesTo(moves + 1) //Incrementing movecount
                    moveOutput.innerText = 'Moves: ' + moves

                    if (puzzleIsSolved()) endGame()

                    return //Should be no risk for multiple moves but why not exit once we've done the move
                } 
            } 
        } 
    } 
}

export function handleSlotClick(clickedSlot) {
    //Immediately abandons this and runs a separate function if Auto: On
    if (autoMove) return handleAutoMove(clickedSlot)

    //Changes target if the clicked slot contains a card
    if (clickedSlot.firstChild) {
        if (selectedCard) selectedCard.classList.remove('selected') //Remove styling from previous selected card
        
        setSelectedCardTo(clickedSlot) //Change selectedCard to the clicked slot
        selectedCard.classList.add('selected') //Adds styling
    } else { 
        if (!selectedCard) return //Checks if there is a selected card before preceding
        if(moveIsAllowed(selectedCard, clickedSlot)) {
            moveCard(selectedCard, clickedSlot)

            //Adding move history THEN deselecting card
            moveHistory.push({source: selectedCard, target: clickedSlot})

            selectedCard.classList.remove('selected')
            setSelectedCardTo(null)

            //Incrementing movecount
            setMovesTo(moves + 1)
            moveOutput.innerText = 'Moves: ' + moves

            if (puzzleIsSolved()) endGame()
        }
    }
}

export function undoMove() {
    if (!moveHistory[0]) return console.log('Undo impossible, no previous moves')
    const lastMove = moveHistory.pop()
    //"Reversing" source and target since we want to move backwards
    const undoSource = lastMove.target
    const undoTarget = lastMove.source

    moveCard(undoSource, undoTarget)  
    
    //Removing 1 from movecount
    setMovesTo(moves - 1)
    moveOutput.innerText = 'Moves: ' + moves
}