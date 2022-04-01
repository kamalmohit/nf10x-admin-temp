import React from 'react';

const OTPFields = ({otp, classes, setOtp}) => {

    const handleOTPFieldChange = (event,currentField, nextField, prevField) => {
        const curr = document.getElementById(currentField);
        const next = document.getElementById(nextField);
        const prev = document.getElementById(prevField);
        const keyPressed = event.keyCode;
        if (keyPressed !== 8) {
            if (curr.value.length && next) {
                setOtp(prevState => prevState + curr.value);
                next.focus();
            } else if(otp.length !== 4) {
                setOtp(prevState => prevState + curr.value);
            }
        }

        if (keyPressed === 8) {
            if (prev !== null) {
                curr.value = "";
                prev.focus();
                setOtp(prevState => prevState.slice(0,-1));
            } else {
                curr.value = "";
                setOtp(prevState => prevState.slice(0,-1));
            }
        }
    }
    return (
        <div className={`flex w-full ${classes}`}>
            <input id="first" onKeyUp={(e) => handleOTPFieldChange(e,'first', 'second', null)} placeholder={'-'} maxLength={1} className="w-[65px] mr-4 p-2 text-center" type="text" />
            <input id="second" onKeyUp={(e) => handleOTPFieldChange(e,'second', 'third', 'first')} placeholder={'-'} maxLength={1} className="w-[65px] mr-4 p-2 text-center" type="text" />
            <input id="third" onKeyUp={(e) => handleOTPFieldChange(e,'third', 'fourth', 'second')} placeholder={'-'} maxLength={1} className="w-[65px] mr-4 p-2 text-center" type="text" />
            <input id="fourth" onKeyUp={(e) => handleOTPFieldChange(e,'fourth', null, 'third')} placeholder={'-'} maxLength={1} className="w-[65px] mr-4 p-2 text-center" type="text" />
        </div>
    )
}

export default OTPFields