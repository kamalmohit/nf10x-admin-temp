import React from 'react';

const Button = (props) => {
    return (
        <button className={`p-2 bg-black hover:opacity-80 ease-out duration 200 rounded-3xl text-white ${props.classes}`} {...props}>{props.children}</button>
    )
};

export default Button;