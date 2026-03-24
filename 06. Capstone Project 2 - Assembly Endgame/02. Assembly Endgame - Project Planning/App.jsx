import React from "react"

/**
 * Project planning:
 * 
 * Questions to ask yourself before writing any code:
 * 
 * - What are the main containers of elements I need
 *   in this app?
 *   1. title/completion state
 *   2. buttons
 *   3. boxes
 *   4. letters
 *   5. new game button
 * 
 * - What values will need to be saved in state vs.
 *   what values can be derived from the state?
 *   - state
 *      1. generated word
 *      2. correct letter(s)
 *      3. incorrect letter(s)
 *      4. game won/new game
 *   - derived
 *      1. game lost
 *      2. lost languages 
 * 
 * - How will the user interact with the app? What
 *   events do I need to handle?
 *   1. begin game
 *   2. select letter
 *      - letter correct
 *      - letter incorrect
 *   3. game won/game lost
 * 
 * 
 */

export default function Hangman() {
    return (
        <main>
            Game goes here
        </main>
    )
}
