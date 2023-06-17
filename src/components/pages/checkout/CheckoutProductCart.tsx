
const CheckoutProductCart = () => {
    return (
        <li className="flex items-center gap-4 py-4">
            <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
            />

            <div>
                <h3 className="text-sm text-textColor">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-textColor">
                    <div>
                        <dt className="inline">Size:</dt>
                        <dd className="inline">XXS</dd>
                    </div>

                    <div>
                        <dt className="inline">Color:</dt>
                        <dd className="inline">White</dd>
                    </div>
                </dl>
            </div>
        </li>
    );
};

export default CheckoutProductCart;