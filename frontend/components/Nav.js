import React from "react";


function Nav (props) {
    
    return (
        <nav className="nav-bar">
            <button onClick={props.randomDate} className="nav-btn nav-right">Random Date</button>
            <h2>{props.date}</h2>
            <button onClick={props.openGitHub} className="nav-btn nav-right">Github</button>
        </nav>
    )
}

export default Nav