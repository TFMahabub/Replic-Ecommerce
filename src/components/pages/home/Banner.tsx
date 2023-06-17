import PrimaryButton from "../../../utils/ReUseCom/PrimaryButton";

const Banner = () => {
    return (
        <div
            className="text-center flex flex-col items-center gap-common"
        >
            <h2
                className="text-3xl font-semibold text-gray"
            >
                WellCome to Replic Ecommerce
            </h2>
            <PrimaryButton>
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