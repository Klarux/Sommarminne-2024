import { cancelButton, cardSlots, confirmResetButton, darkModeButton, playAgainButton, redistributeButton, resetButton, autoButton, undoButton } from "../variables/domSelectors.js";
import { toggleDarkMode, toggleAutoSetting } from "./settingTogglers.js";
import { redistributeCards } from "./cardRedistributer.js";
import { resetGame } from "./gameResetter.js";
import { handleSlotClick, undoMove } from "./slotHandlers.js";
import { toggleEndPopup, toggleResetPopup } from "../../general-functions/elementTogglers.js";

// Adds event listeners for buttons
redistributeButton.addEventListener('click', redistributeCards)
undoButton.addEventListener('click', undoMove)
darkModeButton.addEventListener('click', toggleDarkMode)

resetButton.addEventListener('click', toggleResetPopup)
confirmResetButton.addEventListener('click', () => { toggleResetPopup(); resetGame() })
cancelButton.addEventListener('click', toggleResetPopup)

playAgainButton.addEventListener('click', () => {toggleEndPopup(); resetGame()})

//Adds event listeners to every cardSlot
cardSlots.forEach(slot => slot.addEventListener('click', () => handleSlotClick(slot)));


autoButton.addEventListener('click', toggleAutoSetting)