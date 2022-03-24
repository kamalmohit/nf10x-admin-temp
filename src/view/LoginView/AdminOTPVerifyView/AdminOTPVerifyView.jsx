import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Button from 'globals/UIComponents/Button/Button';
import OTPFields from 'components/OTPFields/OTPFields';
import NF10X from 'assets/nf10x-logo.svg';


const notify = () => toast.error('Enter a valid OTP');

const AdminOTPVerifyView = () => {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const handleOTPVerification = () => {
        if (otp.length === 4) {
            navigate('/home/users/whitelist');
        } else {
            notify();
        }
    }
    return (
        <section className="flex justify-center items-center min-h-screen">
           <div className="basis-1/2 min-h-screen bg-black flex justify-center items-center">
               <img className="h-full w-full" src={NF10X} alt="NF10X logo" />
           </div>
           <div className="basis-1/2 min-h-screen p-8 flex flex-col justify-center">
               <h1 className="text-3xl font-normal w-[300px]">Please verify yourself to continue</h1>
               <h2 className="opacity-70 mt-2 text-md">We’ve sent you a 4-digit code on xyz@sylva.com. Please enter the code below to verify.</h2>
               <OTPFields setOtp={setOtp} classes="mb-4 mt-12" />
               <Button text="Continue" classes="w-[400px] text-[18px]" callback={handleOTPVerification} />
           </div>
           <Toaster />
       </section>
    )
};

export default AdminOTPVerifyView