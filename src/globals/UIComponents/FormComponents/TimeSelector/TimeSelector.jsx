import React from 'react';

const TimeSelector = (props) => {
    return (
        <input type={props.type} {...props.field} {...props} />
    )
}

export default TimeSelector;