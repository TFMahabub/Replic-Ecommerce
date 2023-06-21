import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../utils/ReUseCom/PrimaryButton";
import TextDescription from "../../../utils/ReUseCom/TextDescription";

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div
            className="container text-center lg:max-w-2xl flex flex-col items-center gap-common "
        >
            <h2
                className="text-3xl font-semibold text-white"
            >
                WellCome to Replic Ecommerce
            </h2>
            <TextDescription
                varient="white"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellat commodi animi impedit ratione quam quaerat, aut ad totam sequi.
            </TextDescription>
            <PrimaryButton
                onClick={() => navigate('/login')}
            >
                Geting Start
                <span
                    className="text-xl px-1"
                >
                    &gt;
                </span>
            </PrimaryButton>
        </div>
    );
};

export default Banner;