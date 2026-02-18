import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const InputField = ({ label, type, id, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
        <div className="relative">
            <label htmlFor={id} className="text-sm font-medium text-[#828282] bg-white z-10">
                {label}
            </label>

            <div className="relative">
                <input type={inputType} id={id} placeholder={placeholder} autoComplete="off" className="w-full border border-[#DED2D9] text-[#525252] rounded-sm pl-3 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                {isPassword && (
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded" aria-label={showPassword ? "Hide password" : "Show password"}>
                        {showPassword ? (
                            <FiEyeOff className="w-5 h-5"/>
                        ) : (
                            <FiEye className="w-5 h-5"/>
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

export default InputField;