import React from 'react';

const DateSelector = (props) => {
    return (
      <input type={props.type} {...props.field} {...props}/>
    )
}

export default DateSelector;