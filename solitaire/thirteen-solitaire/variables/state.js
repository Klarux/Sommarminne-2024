import { cardSlots } from "./domSelectors.js"
import { generateKey } from "./thirteenKeyGenerator.js"

//Introduces global variables
const key = generateKey()
let deck = []
let emptySlots = [cardSlots[13], cardSlots[27], cardSlots[41], cardSlots[55]]
let moveHistory = []
let moves = 0
let reshuffles = 0
let selectedCard = null
let autoMove = false


// Allows mutability to non-obj/arr-variables
function setMovesTo(value) {moves = value} 
function setReshufflesTo(value) {reshuffles = value} 
function setSelectedCardTo(value) {selectedCard = value}
function setAutoMoveTo(value) {autoMove = value} 



export {key, deck, emptySlots, moveHistory, moves, setMovesTo, reshuffles, setReshufflesTo, selectedCard, setSelectedCardTo, autoMove, setAutoMoveTo}