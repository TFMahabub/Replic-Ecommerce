import { Link } from "react-router-dom";
import InputForm from "./InputForm";
import SocialMediaIcons from "./SocialMediaIcons";

const Login = () => {
    return (
        <section
            className="flex-center headerHeight"
        >
            <div className="w-full max-w-[26rem] p-8 space-y-3 rounded-xl border-2 border-primary bg-white">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <InputForm />
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 "></div>
                    <p className="px-3 text-sm ">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 "></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <SocialMediaIcons />
                </div>
                <span
                    className="text-xs text-center sm:px-6 "
                >
                    Don't have an account?
                    <Link
                        to={'/register'}
                    >
                        Sign up
                    </Link>
                </span>
            </div>
        </section >
    );
};

export default Login;