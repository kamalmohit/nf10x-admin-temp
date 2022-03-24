import React from 'react';

const Button = ({ text, classes, callback=null}) => {
    return (
        <button className={`bg-black hover:opacity-80 ease-out duration 200 p-2 rounded-3xl text-white ${classes}`} onClick={callback}>{text}</button>
    )
};

export default Button;