import React from 'react';

const OTPFields = ({classes, setOtp}) => {

    const handleOTPFieldChange = (currentField, nextField) => {
        const curr = document.getElementById(currentField);
        const next = document.getElementById(nextField);
        if (curr.value.length && next) {
            setOtp(prevState => prevState + curr.value);
            next.focus();
        } else {
            setOtp(prevState => prevState + curr.value);
        }
    }
    return (
        <div className={`flex w-full ${classes}`}>
            <input id="first" onKeyUp={() => handleOTPFieldChange('first', 'second')} placeholder={'-'} maxLength={1} className="w-[65px] mr-4 p-2 text-center" type="text" />
            <input id="second" onKeyUp={() => handleOTPFieldChange('second', 'third')} placeholder={'-'} maxLength={1} className="w-[65px] mr-4 p-2 text-center" type="text" />
            <input id="third" onKeyUp={() => handleOTPFieldChange('third', 'fourth')} placeholder={'-'} maxLength={1} className="w-[65px] mr-4 p-2 text-center" type="text" />
            <input id="fourth" onKeyUp={() => handleOTPFieldChange('fourth', null)} placeholder={'-'} maxLength={1} className="w-[65px] mr-4 p-2 text-center" type="text" />
        </div>
    )
}

export default OTPFields