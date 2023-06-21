import { BiCartAdd } from 'react-icons/bi';

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
                <div
                    className="flex items-center gap-common"
                >
                    <button type="button" className="flex-center h-12 w-full lg:w-[80%] bg-primary text-white rounded-lg uppercase active:scale-90 duration-common">
                        Read more
                    </button>
                    <button type="button" className="flex-center h-12 w-full lg:w-[20%] bg-primary text-white rounded-lg uppercase active:scale-90 duration-common">
                        <BiCartAdd
                            className="text-3xl"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;