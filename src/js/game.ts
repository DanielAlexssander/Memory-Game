import { Card } from './card'

export class Game {
    constructor(private dom: HTMLDivElement, private cards: Card[]) {

    }

    private firstCard: HTMLDivElement | null = null
    private secondCard: HTMLDivElement | null = null

    setCorrectAttempt() {
        this.firstCard = null
        this.secondCard = null
    }

    reset() {
        this.firstCard?.classList.remove("show")
        this.secondCard?.classList.remove("show")
        this.firstCard = null
        this.secondCard = null
    }

    resetCards() {
        document.querySelectorAll(".card").forEach((item) => { item.remove() })
    }

    addListeners() {
        Array.from(this.dom.querySelectorAll('[data-card]')).forEach((card) => {
            card.addEventListener("click", e => {

                if (this.firstCard === e.currentTarget || this.secondCard === e.currentTarget || (e.currentTarget as HTMLDivElement).classList.contains("show")) return

                if (!this.firstCard) {
                    this.firstCard = e.currentTarget as HTMLDivElement 
                    this.firstCard.classList.add("show")
                } else if (!this.secondCard) {
                    this.secondCard = e.currentTarget as HTMLDivElement 
                    this.secondCard.classList.add("show")

                    if (this.firstCard.getAttribute("data-card") === this.secondCard.getAttribute("data-card")) {
                        this.setCorrectAttempt()
                        if (document.querySelectorAll(".card.show").length === 16) {
                            const congratsId = document.getElementById("congratsId")
                            congratsId?.classList.remove("hidden")
                        }
                    } else {
                        setTimeout(this.reset.bind(this), 500)
                    }
                }
            })
        })
    }

    init() {
        this.dom.innerHTML = `
            ${this.cards.map(card => (
                `
                <div class="card" data-card="${card.id}">
                    <img src="img/${card.img}" class="card-front" alt="${card.description}">
                    <img src="img/back.png" class="card-back" alt="Memory card">
                </div>
                `
            ) ).join('')}
        `
        this.addListeners()
    }
}