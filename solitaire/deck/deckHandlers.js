function generateDeck() {
    const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']

    let newDeck = []

    for (const suit of suits) {
        for (const rank of ranks) {
            let newCard = {
                rank: rank,
                suit: suit,
                name: rank + ' of ' + suit
            } 
            setCardImage(newCard) // Generates HTML image element for newCard
            newDeck.push(newCard)
        }
    }
    
    return newDeck
}
function setCardImage(cardObject) {
    let newImage = document.createElement('img')
    //Importantly image's src 
    const dressedRanks = ['Jack', 'Queen', 'King']
    if (dressedRanks.includes(cardObject.rank)) {
        newImage.src = './deck/card-images/' + cardObject.rank.toString().toLowerCase() + '_of_' + cardObject.suit.toLowerCase() + '2.png'
    } else {
        newImage.src = './deck/card-images/' + cardObject.rank.toString().toLowerCase() + '_of_' + cardObject.suit.toLowerCase() + '.png'
    }
    newImage.alt = cardObject.name
    newImage.classList.add('card-image')
    cardObject.image = newImage
}

function shuffleDeck (deckArray) {
    let shuffledDeck = []
    for (let i = deckArray.length; i > 0; i--) { // Iterates through deck
        // Splices out a random card from the inserted deck and puts it in the new shuffled deck
        const index = Math.floor(Math.random() * i) 
        shuffledDeck.push(deckArray.splice(index, 1)[0])  
    }
    return shuffledDeck
}

export {generateDeck, shuffleDeck}