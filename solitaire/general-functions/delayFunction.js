function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)) 
} // Pauses code for ms milliseconds, needs to be applied using async/await

export {delay}