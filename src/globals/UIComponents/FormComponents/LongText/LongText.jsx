import React from 'react';

const LongText = (props) => {
    return (
        <div className="mt-4 h-20">
            <span className="sr-only">{props.field.name}</span>
            <textarea className="w-full h-full bg-form p-2" type={props.type} {...props.field} {...props} />
        </div>
    )
}

export default LongText;