import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Button from 'globals/UIComponents/Button/Button';
import Input from 'globals/UIComponents/Input/Input';
import NF10X from 'assets/nf10x-logo.svg';

const notify = () => toast.error('Enter a valid email');

const AdminLoginView = () => {
    const [userEmail, setUserEmail] = useState("");
    const navigate = useNavigate();
    const handleSendOTPVerification = () => {
        /**
         * *This function will handle the OTP verification process and redirect to OTP screen.
         * todo: Make this async.
         */
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(userEmail)) {
            navigate('/otpVerify');
        } else {
            notify();
        }
    }
    return (
       <section className="flex justify-center items-center min-h-screen">
            <div className="basis-1/2 min-h-screen bg-black flex justify-center items-center">
               <img className="h-full w-full" src={NF10X} alt="" />
           </div>
           <div className="basis-1/2 min-h-screen p-8 flex flex-col justify-center">
               <h1 className="text-3xl font-normal w-[300px]">Welcome to NF10X admin console</h1>
               <h2 className="opacity-70 mt-2 text-md">Please login to continue</h2>
               <Input callback={setUserEmail} type="email" placeholder='Enter email address' classes="mb-4 mt-12" />
               <Button text="Continue" classes="w-full text-[18px]" callback={handleSendOTPVerification} />
           </div>
           <Toaster />
       </section>
    )
}

export default AdminLoginView;