import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState([])

    const countUnreadMessages = unreadMessages.length
    
    return (
        <div>
            {
                countUnreadMessages > 0 && 
                <h1>You have {countUnreadMessages} unread messages!</h1>
            }
            {
                countUnreadMessages == 0 &&
                <h1>You have no unread messages.</h1>
            }
        </div>
    )
}
