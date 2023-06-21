import { BiCartAdd } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { ProductType } from '../../TypeInterfaces/ProductType';
import { increateCartProduct } from '../../feauters/navbar/navbarSlice';

const ProductCart = ({ product }: { product: ProductType }) => {
    const dispatch = useDispatch()
    const { name, price, description } = product;
    console.log(product);

    return (
        <div className="rounded-md shadow-md bg-white grow shrink basis-1/1 md:basis-[45%] lg:basis-[32%]">
            <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-common">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracki ">{name}</h2>
                    <p className="text-textColor">
                        {description}
                    </p>
                </div>
                <div
                    className="flex items-center gap-common"
                >
                    <button type="button" className="flex-center h-12 w-full lg:w-[80%] bg-primary text-white rounded-lg uppercase active:scale-90 duration-common">
                        Read more
                    </button>
                    <button
                        onClick={() => dispatch(increateCartProduct(product))}
                        type="button"
                        className="flex-center h-12 w-full lg:w-[20%] bg-primary text-white rounded-lg uppercase active:scale-90 duration-common">
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