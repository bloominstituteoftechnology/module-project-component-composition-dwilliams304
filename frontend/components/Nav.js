import React from "react";


function Nav (props) {
    
    return (
        <nav className="nav-bar">
            <button onClick={props.previousDay} className="nav-btn nav-left">Previous Day</button>
            <button onClick={props.chooseDate} className="nav-btn nav-left">Choose Date</button>
            <h2>{props.date}</h2>
            <button onClick={props.randomDate} className="nav-btn nav-right">Random Date</button>
            <button onClick={props.gitHubButton} className="nav-btn nav-right">Github</button>
        </nav>
    )
}

export default Nav