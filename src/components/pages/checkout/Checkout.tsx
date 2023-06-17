import CheckoutForm from "./CheckoutForm";
import CheckoutProductCart from "./CheckoutProductCart";

const Checkout = () => {
    return (
        <section
            className="container"
        >
            <h1 className="sr-only">Checkout</h1>

            <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-50 py-12 md:py-24">
                    <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                        <div className="flex items-center gap-4">
                            <span className="h-10 w-10 rounded-full bg-blue-700"></span>

                            <h2 className="text-xl font-medium text-textColor">Your all product</h2>
                        </div>

                        <div>
                            <p className="text-2xl font-medium tracking-tight text-textColor">
                                $99.99
                            </p>

                            <p className="mt-1 text-sm text-textColor">For the purchase of</p>
                        </div>

                        <div>
                            <div className="flow-root">
                                <ul className="-my-4 divide-y divide-gray/50">
                                    <CheckoutProductCart />
                                    <CheckoutProductCart />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-12 md:py-24">
                    <div className="mx-auto max-w-lg px-4 lg:px-8">
                        <CheckoutForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;