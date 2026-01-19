import { useState } from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the button flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    const [isGoingOut, setIsGoingOut] = useState(false)

    function handleClick() {
        setIsGoingOut(!isGoingOut)
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button 
                aria-label={`The current answer is ${isGoingOut}. Click the button to change your mind.`}
                className="value"
                onClick={handleClick}
            >
                {isGoingOut ? "Yes" : "No"}
            </button>
        </main>
    )
}
