import React from 'react';

const Input = (props) => {
    return (
        <div className="mt-4">
            <label>
                <span className="sr-only">{props.field.name}</span>
                <input className="w-full rounded-md bg-form p-2" type={props.type} {...props.field} {...props} />
            </label>
        </div>
    )
}

export default Input;