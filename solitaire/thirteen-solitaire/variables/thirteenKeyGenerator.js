export function generateKey() {
    const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']

    let newKey = []

    for (const suit of suits) {
        for (const rank of ranks) {
            newKey.push(rank + ' of ' + suit) //Only name is needed as this can be compared to cardElement's "alt" attribute
        }
        newKey.push(null) //... namely that there needs to be a null added for each suit to account for the empty slots
    }

    return newKey
}