import { words } from '../mock/Data.js'

const Card = () => {
    const cardWrapperElement = document.getElementById('card-wrapper')
    let counter = 0
    const cardHTML = words
        .map((word) => {
            return (
                <div class="card">
                    <h1>{word[counter]}</h1>
                    <p>24.12.2024</p>
                </div>
            )

            cardWrapperElement.innerHTML = cardHTML
        })
        .john('')
    counter++
}

export default Card
