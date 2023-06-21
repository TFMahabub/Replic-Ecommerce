import { Link } from "react-router-dom";
import InputForm from "./InputForm";

const Register = () => {
    return (
        <section
            className="flex-center headerHeight"
        >
            <div className="w-full max-w-[26rem] p-8 space-y-3 rounded-xl border-2 border-primary bg-white">
                <h1 className="text-2xl font-bold text-center text-gray">Register</h1>
                <InputForm />
                <span
                    className="text-xs text-center sm:px-6 "
                >
                    Alread have an account?
                    <Link
                        to={'/login'}
                    >
                        Log in
                    </Link>
                </span>
            </div>
        </section>
    );
};

export default Register;