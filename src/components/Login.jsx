import { FcGoogle } from "react-icons/fc";
import LoginImage from '../assets/illustration.png';
import Icon from '../assets/icon.png';

const Login = () => {

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-[#FFE6C9]">
            <div className="flex max-w-7xl w-full bg-white rounded-2xl overflow-hidden shadow-[0_0_45px_#E1C2A8]">
                

                {/* image */}
                <div className="hidden lg:flex lg:w-1/2 bg-white p-8 relative items-center justify-center">
                    <img src={LoginImage} alt="" className="relative z-10 w-full h-auto max-w-sm object-center"/>
                </div>

                {/* login form */}
                <div className="flex-1 p-8 shadow-xl sm:p-12 lg:p-16 flex flex-col justify-center">
                    <img src={Icon} alt="" className="w-12"/>
                    <h2 className="text-[#525252] text-3xl font-bold mt-6">Login to your Account</h2>
                    <span className="text-[#525252] mb-6">See what is going on with your business</span>

                    {/* google buttom */}
                    <div className="relative">
                        <button className="w-full flex items-center justify-center gap-3 text-[#828282] border-2 border-gray-200 rounded-sm py-3 font-semibold">
                            <FcGoogle className="w-5 h-5" />
                            Continue with Google
                        </button>
                    </div>

                    {/* or Divider */}
                    <div className="flex justify-center my-6">
                        <span className="shrink mx-4 text-[#A1A1A1] text-sm">------------- or Sign in with Email ------------- </span>
                    </div>
                    
                    <form className="space-y-5">
                        {/* email */}
                        <div className="relative pt-4">
                            <label htmlFor="email" className="text-sm font-medium text-[#828282] bg-white z-10">Email</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></span>
                                <input type="text" id="email"  className="w-full border border-[#DED2D9] text-[#E0E0E0] rounded-sm pl-3 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="mail@abc.com" autoComplete="off"/>
                            </div>
                        </div>

                        {/* password */}
                        <div className="relative pt-4">
                            <label htmlFor="password" className="text-sm font-medium text-[#828282] bg-white z-10">Password</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></span>
                                <input type="text" id="email"  className="w-full border border-[#DED2D9] text-[#E0E0E0] rounded-sm pl-3 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="*****************" autoComplete="off"/>
                            </div>
                        </div>

                        
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
                        <button className="w-full text-white bg-[#7F265B] rounded-sm py-3 font-semibold hover:bg-[#975c7f] transition duration-200">
                            Login
                        </button>
                    </form>

                    {/* signup link */}
                    <div className="text-center text-sm text-[#828282]">
                        Not Registered Yet?{" "}
                        <a href="#"
                        className="text-[#7F265B] font-semibold hover:underline">
                            Create an account
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login