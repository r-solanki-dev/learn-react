import { useState } from "react"
import Die from "./Die"

export default function App() {

    function getRndIntegerArray(min, max, count) {
        let integerArray = Array()
        for (let i = 1; i <= count; i++) {
            integerArray.push(getRndInteger(min, max))
        }

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min
        }

        return integerArray
    }

    const [dice, setDice] = useState(getRndIntegerArray(1, 6, 10))

    return (
        <main>
            <div className="outer-box">
                <div className="inner-box">
                    <h1>Tenzies</h1>
                    <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    <div className="dice-container">
                        {dice.map((die) => {
                            return <Die value={die}/>
                        })}
                    </div>
                    <button className="new-roll-button">
                        Roll
                    </button>
                </div>
            </div>
        </main>
    )
}