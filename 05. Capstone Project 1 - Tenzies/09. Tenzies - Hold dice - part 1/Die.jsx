export default function Die(props) {

    const hold = props.onClick

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return (
        <button style={styles} onClick={() => {hold(props.id)}}>{props.value}</button>
    )
}