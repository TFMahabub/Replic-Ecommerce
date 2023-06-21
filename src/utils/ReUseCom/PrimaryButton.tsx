import { useNavigate } from "react-router-dom";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate()
    return (
        <button
            onClick={() => navigate('/login')}
            type='button'
            className="h-10 w-40 flex-center rounded-lg text-white bg-primary active:scale-90 duration-common"
        >
            {children}
        </button>
    );
};

export default PrimaryButton;