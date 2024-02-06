export interface Card {
    id: string;
    description: string;
    img: string;
}

export function newShuffleCards() {
    const uniqueCards: Card[] = [
        {
            id: "card1",
            description: "card 1",
            img: "01.png",
        },
        {
            id: "card2",
            description: "card 2",
            img: "02.png"
        },
        {
            id: "card3",
            description: "card 3",
            img: "03.png"
        },
        {
            id: "card4",
            description: "card 4",
            img: "04.png"
        },
        {
            id: "card5",
            description: "card 5",
            img: "05.png"
        },
        {
            id: "card6",
            description: "card 6",
            img: "06.png"
        },
        {
            id: "card7",
            description: "card 7",
            img: "07.png"
        },
        {
            id: "card8",
            description: "card 8",
            img: "08.png"
        },
    ]
    
    const cardsOriginal: Card[] = []
    
    uniqueCards.forEach((card) => {
        cardsOriginal.push({ ...card })
        cardsOriginal.push({ ...card })
    })
    
    function shuffleNumber(min: number, max: number) {
        const n = Math.random() * (max - min + 1) + min
        return parseInt(n.toString())
    }

    const cards: Card[] = []

    const len = cardsOriginal.length
    while (cards.length < len) {
        let shuffled = shuffleNumber(0, cardsOriginal.length - 1)
        const item = cardsOriginal.splice(shuffled, 1)
        cards.push(item[0])
    }
    return cards
}