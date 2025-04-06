import { distributeCards } from "./setupFunctions.js"
import { activateButtons } from "../general-functions/elementTogglers.js"
import "./game-logic/clickHandlers.js"

//Initializing game by laying out cards, then activating the redist-/reset-buttons
await distributeCards()
activateButtons()