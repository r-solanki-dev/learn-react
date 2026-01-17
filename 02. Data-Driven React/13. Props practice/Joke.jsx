export default function Joke (props) {
    const {setup, punchline} = props
    return(
        <>
            { setup  ? <p>Setup: {setup}</p> : null }
            <strong>Punchline: {punchline}</strong>
            <hr/>
        </>

    )
}