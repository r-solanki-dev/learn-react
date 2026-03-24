import React from "react"

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
 */

export default function Hangman() {
    return (
        <main>
            <div className="headline">
                <p className="title">Assembly: Endgame</p>
                <p className="subtext">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </div>
        </main>
    )
}
