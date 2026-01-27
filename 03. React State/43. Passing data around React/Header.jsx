import React from "react"
import avatar from "./icons/user.png"

export default function Header(props) {

    const userName = props.name

    return (
        <header>
            <img src={avatar} />
            <p>{userName}</p>
        </header>
    )
}
