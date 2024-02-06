
import { newShuffleCards } from './card'
import { Game } from './game'

const gameDOM = document.querySelector('[data-game]') as HTMLDivElement

let newCards = newShuffleCards()
let game = new Game(gameDOM, newCards)
game.init()

const startOver = document.getElementById("startOver") as HTMLButtonElement
startOver.addEventListener("click", () => {
    document.querySelectorAll(".card.show").forEach((item) => { item.classList.remove("show") })
    const congratsId = document.getElementById("congratsId")
    congratsId?.classList.add("hidden")
    setTimeout(() => {
        newCards = newShuffleCards()
        game = new Game(gameDOM, newCards)
        game.init()
    }, 300)
    
})
