import React from "react"

export default function Body(props) {

    const userName = props.name
    return (
        <section>
            <h1>Welcome back, {userName}!</h1>
        </section>
    )
}
