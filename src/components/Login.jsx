import React, { useState } from "react";
import { FiEyeOff, FiEye, FiLock, FiMail } from "react-icons/fi";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import LoginImage from '../assets/illustration.png';
import Icon from '../assets/icon.png';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="flex max-w-6xl w-full bg-white rounded-2xl overflow-hidden">
                
                {/* login form */}
                <div className="flex-1 p-8 shadow-xl sm:p-12 lg:p-16 flex flex-col justify-center">
                    <img src={Icon} alt="" className="w-12"/>
                    <h2 className="text-[#525252] text-3xl font-bold mt-6">Login to your Account</h2>
                    <span className="text-[#525252] mb-6">See what is going on with your business</span>
                </div>
            </div>
        </div>
    )
}

export default Login