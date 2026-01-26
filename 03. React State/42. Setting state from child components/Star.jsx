import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function Star(props) {

    const isFilled = props.isFilled
    const handleClick = props.handleClick

    let starIcon = isFilled ? starFilled : starEmpty

    return(
        <button
            aria-pressed={isFilled}
            aria-label={isFilled ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button"
            onClick={handleClick}
        >
            <img
                src={starIcon}
                alt={isFilled ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    )
}