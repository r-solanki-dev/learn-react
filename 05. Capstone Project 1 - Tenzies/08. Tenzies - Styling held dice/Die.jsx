export default function Die(props) {

    return (
        <button 
            className={props.isHeld == true ? "held" : ""}
        >{props.value}</button>
    )
}