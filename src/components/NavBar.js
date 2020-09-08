import React from "react"
import "../NavBar.css"


function NavBar() {
    const firstName = "Geoffrey"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const style = {
        fontSize: 40,
        padding: 12,
        border: "2px solid #000"
    }
    
    if (hours < 12) {
        timeOfDay = "morning"
        style.backgroundColor = "#FF2D00"
        style.color = "#ff00ff"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        style.backgroundColor = "#555"
        style.color = "#000"
    } else {
        timeOfDay = "evening"
        style.backgroundColor = "#0f0"
        style.color = "#ff00ff"
    }

    return(
        <div>
            <h1 style={style}>Good {`${timeOfDay}, ${firstName}`}!</h1>
        </div>
    )
}

export default NavBar