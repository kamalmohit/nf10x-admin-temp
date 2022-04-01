import React from 'react';
import { useNavigate } from 'react-router-dom';
import NF10X from 'assets/NF10X.png';
import Logo from 'assets/Dashboard/logo-black.svg'
import ForgotPasswordForm from 'components/Forms/ForgotPasswordForm';


const AdminForgotPasswordView = () => {
    const navigate = useNavigate();
    const handleForgotPassword = (formValues) => {
        if (formValues.email.length) {
            navigate('/home/users/whitelist');
        }
    }
    return (
       <section className="flex justify-center items-center min-h-screen">
            <div className="basis-1/2 min-h-screen bg-black flex justify-center items-center">
               <img className="h-full w-full" src={NF10X} alt="" />
           </div>
           <div className="basis-1/2 min-h-screen pt-16 pb-16 pl-28 pr-28 flex flex-col justify-center">
               <img className="w-10 h-10" src={Logo} alt="Small Logo" />
               <h1 className="text-md mt-2 mb-4">Reset Password</h1>
               <h2 className="opacity-70 mt-2 text-md mb-4">Please enter your registered email address. We will send instructions to help reset your password.</h2>
               <ForgotPasswordForm handleForgotPassword={handleForgotPassword} />
           </div>
       </section>
    )
}

export default AdminForgotPasswordView;