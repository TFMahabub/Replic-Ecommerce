
const ProductCart = () => {
    return (
        <div className="rounded-md shadow-md bg-white grow shrink basis-1/1 md:basis-[45%] lg:basis-[32%]">
            <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-common">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracki ">Donec lectus leo</h2>
                    <p className="text-textColor">
                        Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
                    </p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-primary text-white active:scale-90 duration-common">Read more</button>
            </div>
        </div>
    );
};

export default ProductCart;