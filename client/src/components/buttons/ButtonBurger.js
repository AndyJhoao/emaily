import React from "react";

const ButtonBurger = (props) =>{
    return (
        <div id='nav-container' onClick={props.clicked ? 'pushed' : ''}>
            <div class="toggle-icon">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    );
}

export default ButtonBurger;