
const CheckoutForm = () => {
    return (
        <form className="grid grid-cols-6 gap-4">
            <div className="col-span-3">
                <label
                    htmlFor="FirstName"
                    className="block text-xs font-medium text-textColor"
                >
                    First Name
                </label>

                <input
                    type="text"
                    id="FirstName"
                    className="mt-1 w-full rounded-md shadow-sm sm:text-sm py-2 px-4 border border-gray/30 outline-none"
                />
            </div>

            <div className="col-span-3">
                <label
                    htmlFor="LastName"
                    className="block text-xs font-medium text-textColor"
                >
                    Last Name
                </label>

                <input
                    type="text"
                    id="LastName"
                    className="mt-1 w-full rounded-md shadow-sm sm:text-sm py-2 px-4 border border-gray/30 outline-none"
                />
            </div>

            <div className="col-span-6">
                <label htmlFor="Email" className="block text-xs font-medium text-textColor">
                    Email
                </label>

                <input
                    type="email"
                    id="Email"
                    className="mt-1 w-full rounded-md shadow-sm sm:text-sm py-2 px-4 border border-gray/30 outline-none"
                />
            </div>

            <div className="col-span-6">
                <label htmlFor="Phone" className="block text-xs font-medium text-textColor">
                    Phone
                </label>

                <input
                    type="tel"
                    id="Phone"
                    className="mt-1 w-full rounded-md shadow-sm sm:text-sm py-2 px-4 border border-gray/30 outline-none"
                />
            </div>

            <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-textColor">
                    Card Details
                </legend>

                <div className="mt-1 rounded-md bg-white shadow-sm">
                    <div>
                        <label htmlFor="CardNumber" className="sr-only"> Card Number </label>

                        <input
                            type="text"
                            id="CardNumber"
                            placeholder="Card Number"
                            className="mt-1 w-full rounded-t-md shadow-sm sm:text-sm py-2 px-4 border border-gray/30 outline-none"
                        />
                    </div>

                    <div className="flex">
                        <div className="flex-1">
                            <label htmlFor="CardExpiry" className="sr-only"> Card Expiry </label>

                            <input
                                type="text"
                                id="CardExpiry"
                                placeholder="Expiry Date"
                                className="relative w-full rounded-es-md border border-gray/50 focus:z-10 sm:text-sm py-2 px-4 outline-none"
                            />
                        </div>

                        <div className="-ms-px flex-1">
                            <label htmlFor="CardCVC" className="sr-only"> Card CVC </label>

                            <input
                                type="text"
                                id="CardCVC"
                                placeholder="CVC"
                                className="relative w-full rounded-es-md border border-gray/50 focus:z-10 sm:text-sm py-2 px-4 outline-none"
                            />
                        </div>
                    </div>
                </div>
            </fieldset>

            <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-textColor">
                    Billing Address
                </legend>

                <div className="mt-1 -space-y-px bg-white shadow-sm">
                    <div>
                        <label htmlFor="Country" className="sr-only">Country</label>

                        <select
                            id="Country"
                            className="relative w-full rounded-t-md border border-gray/50 focus:z-10 sm:text-sm py-2 px-4 outline-none"
                        >
                            <option>England</option>
                            <option>Wales</option>
                            <option>Scotland</option>
                            <option>France</option>
                            <option>Belgium</option>
                            <option>Japan</option>
                        </select>
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="PostalCode"> ZIP/Post Code </label>

                        <input
                            type="text"
                            id="PostalCode"
                            placeholder="ZIP/Post Code"
                            className="relative w-full rounded-b-md border border-gray/50 focus:z-10 sm:text-sm py-2 px-4 outline-none"
                        />
                    </div>
                </div>
            </fieldset>

            <div className="col-span-6">
                <button
                    className="block w-full rounded-md bg-primary p-2.5 text-sm text-white transition hover:shadow-lg"
                >
                    Pay Now
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;