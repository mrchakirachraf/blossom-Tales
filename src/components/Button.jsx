import React from "react";

const Button = (props) => {
    return (
        <button className={`${props.class} btn`}>{props.text}</button>
    );
}

export default Button;