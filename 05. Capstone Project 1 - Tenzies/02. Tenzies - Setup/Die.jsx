export default function Die(props) {

    const buttonStyle = props.isSelected ? "die-button die-button-selected" : "die-button"
    
    return(
        <button
            className={buttonStyle}
        >
            {props.value}
        </button>
    )
    
}