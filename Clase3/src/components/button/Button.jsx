import React from 'react';

const Button = ({text, number, clickazo}) => {
    return (
    <button onClick = {() => clickazo(text)}>
        {text} {number}
    </button>
    )
};

export default Button;