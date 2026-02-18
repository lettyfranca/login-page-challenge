import { FcGoogle } from "react-icons/fc";
import LoginImage from '../assets/illustration.png';
import Icon from '../assets/icon.png';
import InputField from '../components/InputField';
import PrimaryButton from "../components/PrimaryButton";
import Divider from "../components/Divider";
import SocialButton from "../components/SocialButton";

const Login = () => {

    return (
        <main className="min-h-screen flex items-center justify-center p-4 bg-[#FFE6C9]">
            <div className="flex flex-col lg:flex-row max-w-7xl w-full bg-white rounded-2xl overflow-hidden shadow-[0_0_45px_#E1C2A8]">
                
                {/* image */}
                <div className="w-full h-56 sm:h-72 lg:h-auto lg:w-3/5 relative lg:p-2 bg-white">
                    <img src={LoginImage} alt="Skull using a laptop with the phrase Turn your ideas into reality. Start for free and get attractive offers from the community." className="w-full h-full object-cover"/>
                </div>

                {/* login form */}
                <div className="flex-1 p-8 shadow-xl sm:p-12 lg:p-16 flex flex-col justify-center">
                    <img src={Icon} alt="Company logo" className="w-12 pt-16"/>
                    <h1 className="text-[#525252] text-2xl sm:text-3xl font-bold mt-6">Login to your Account</h1>
                    <span className="text-[#525252] text-sm sm:text-base mb-6 block">See what is going on with your business</span>

                    {/* google buttom */}
                    <SocialButton icon={FcGoogle}>
                        Continue with Google
                    </SocialButton>

                    {/* divider */}
                    <Divider text="or Sign in with Email" />
                    
                    <form className="space-y-5">
                        {/* email */}
                        <InputField label="Email" type="email" id="email" placeholder="mail@abc.com"/>
         
                        {/* password */}
                        <InputField label="Password" type="password" id="password" placeholder="*****************"/>

                        {/* forgot password link */}
                        <div className="flex justify-between items-center">
                            <div className="text-left">
                                <label className="flex items-center gap-2 text-sm text-[#A1A1A1]">
                                    <input
                                        type="checkbox"
                                        name="rememberPass"
                                        id="rememberPass"
                                        className="w-4 h-4 accent-[#7F265B]"
                                    />
                                    Remember Me
                                </label>
                            </div>
                            <div className="text-right">
                                <a href="#" className="text-sm text-[#7F265B] font-medium">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        {/* login buttom */}
                        <PrimaryButton>Login</PrimaryButton>
                    </form>

                    {/* signup link */}
                    <div className="text-center text-sm text-[#828282] pt-16">
                        Not Registered Yet?{" "}
                        <a href="#"
                        className="text-[#7F265B] font-semibold hover:underline">
                            Create an account
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login