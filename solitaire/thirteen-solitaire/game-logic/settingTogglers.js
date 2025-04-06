import { darkModeButton, autoButton } from "../variables/domSelectors.js";
import { autoMove, setAutoMoveTo } from "../variables/state.js";

export function toggleDarkMode() {
    if (darkModeButton.innerText.includes('Off')) {
        darkModeButton.innerText = 'Dark Mode: On'
        document.body.classList.add('dark') //Enables dark mode
    } else {
        darkModeButton.innerText = 'Dark Mode: Off'
        document.body.classList.remove('dark') //Disables dark mode
    }
}

export function toggleAutoSetting() {
    if (!autoMove) {
        autoButton.innerText = 'Auto: On'
        setAutoMoveTo(true)
    } else {
        autoButton.innerText = 'Auto: Off'
        setAutoMoveTo(false)
    }
}
