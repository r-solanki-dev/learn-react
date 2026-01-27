export default function Pad(props) {
    const [color, on] = [props.color, props.on]
    return (
        <button 
            style={{
                backgroundColor: color
            }}
        ></button>
    )
}