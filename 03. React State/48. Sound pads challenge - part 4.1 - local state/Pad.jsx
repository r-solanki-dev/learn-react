import { useState } from "react"

export default function Pad(props) {
/**
 * Challenge: Create state controlling whether
 * this pad is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 * 
 * Create an event listener so when the pad is clicked,
 * it toggles from "on" to "off".
 * 
 * Goal: clicking each pad should toggle it on and off.
 */

    const [isPadOn, setIsPadOn] = useState(props.on)

    function togglePadState(prevIsPadOn) {
        setIsPadOn(prevIsPadOn => !prevIsPadOn)
    }

    return (
        <button 
            style={{backgroundColor: props.color}}
            className={isPadOn ? "on" : undefined}
            onClick={togglePadState}
        ></button>
    )
}