import PrimaryButton from "../../../utils/ReUseCom/PrimaryButton";

const CheckoutForm = () => {
    return (
        <form className="p-10 max-h-[90%] space-y-common">
            {/* ------------your-name------------ */}
            <div
                className="space-y-1"
            >
                <label
                    htmlFor=""
                    className="text-sm text-textColor">
                    Your Name:
                </label>
                <div
                    className="flex items-center"
                >
                    <input type="text" name="first-name" id=""
                        placeholder="First Name"
                        className="input-default flex-1 rounded-l-sm"
                    />
                    <input type="text" name="last-name" id=""
                        placeholder="Last Name"
                        className="input-default flex-1 rounded-r-sm"
                    />
                </div>
            </div>
            {/* ------------your-email------------ */}
            <div
                className="space-y-1"
            >
                <label
                    htmlFor=""
                    className="text-sm text-textColor">
                    Your Email:
                </label>
                <input type="email" name="email" id=""
                    placeholder="Email"
                    className="input-default rounded-sm w-full"
                />
            </div>
            {/* ------------your-phone------------ */}
            <div
                className="space-y-1"
            >
                <label
                    htmlFor=""
                    className="text-sm text-textColor flex">
                    Your Phone Number:
                </label>
                <input type="text" name="phone-number" id=""
                    placeholder="Phone Number"
                    className="input-default rounded-r-sm w-full"
                />
            </div>
            {/* ------------your-name------------ */}
            <div
                className="space-y-1"
            >
                <label
                    htmlFor=""
                    className="text-sm text-textColor">
                    Your Address:
                </label>
                <div
                    className="flex items-center w-full"
                >
                    <input type="text" name="address-1" id=""
                        placeholder="Address 1"
                        className="input-default flex-1 rounded-l-sm"
                    />
                    <input type="text" name="address-2" id=""
                        placeholder="Address 2"
                        className="input-default flex-1 rounded-r-sm"
                    />
                </div>
            </div>
            <PrimaryButton
                variant="big"
                type="submit"
            >
                Pay Now
            </PrimaryButton>
        </form>
    );
};

export default CheckoutForm;