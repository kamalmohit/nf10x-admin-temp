import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { LoginForm } from 'components/Forms';
import NF10X from 'assets/NF10X.png';
import Logo from 'assets/Dashboard/logo-black.svg'

const notify = () => toast.error('Enter a valid email');

const AdminLoginView = () => {
    const navigate = useNavigate();
    const handleUserAuth = (formValues) => {
        /**
         * *This function logs in
         * todo: Make this async.
         */
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(formValues.email)) {
            navigate('/home/users/whitelist');
        } else {
            notify();
        }
    }

    const handleForgotPassword = () => {
        navigate('/forgotPassword');
    }
    return (
       <section className="flex justify-center items-center min-h-screen">
            <div className="basis-1/2 min-h-screen bg-black flex justify-center items-center">
               <img className="h-full w-full" src={NF10X} alt="" />
           </div>
           <div className="basis-1/2 min-h-screen pt-12 pb-12 pl-28 pr-28 flex flex-col justify-center">
               <img className="w-10 h-10" src={Logo} alt="Small Logo" />
               <h1 className="text-4xl font-bold w-[300px] mt-4 mb-4">Welcome to NF10X admin console</h1>
               <h2 className="opacity-70 mt-2 text-md mb-4">Please login to continue</h2>
               <LoginForm handleUserAuth={handleUserAuth} handleForgotPassword={handleForgotPassword} />
           </div>
           <Toaster />
       </section>
    )
}

export default AdminLoginView;