import React from 'react';

const RadioGroup = (props) => {
    return (
        <div role={'radiogroup'} onChange={(e) => props.setFieldValue('eventPlatform', e.target.value)} {...props.field} {...props}>
            {props.children}
        </div>
    )
}

export default RadioGroup;