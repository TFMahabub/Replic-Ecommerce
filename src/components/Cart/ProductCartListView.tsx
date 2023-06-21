import { RiCloseFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { ProductType } from "../../TypeInterfaces/ProductType";
import ProductData from '../../data/Products.json';
import { CartProduct, decreaseCartProduct } from "../../feauters/navbar/navbarSlice";

const ProductCartListView = ({ product }: { product: CartProduct }) => {
    const dispatch = useDispatch()

    const findProduct = ProductData?.find((item: ProductType) => item?.id === product?.id);
    // const { id, name, price } = findProduct;
    return (
        <div className="rounded-md shadow-md bg-white grow shrink basis-1/1 md:basis-[45%] lg:basis-[32%] flex max-w-sm max-h-24 p-2 relative">
            <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center rounded-md w-24 dark:bg-gray-500" />
            <div className="flex flex-col px-4 pt-1">
                <div className="space-y-1">
                    <p
                        className="text-md text-headingTextColor font-medium tracking-wide"
                    >
                        {findProduct?.name}
                    </p>
                    <p
                        className="text-sm text-textColor font-medium tracking-wide"
                    >
                        Quantity: <span className="text-primary">{product.quantity}</span>
                    </p>
                    <div
                        className='flex items-center gap-1 text-sm font-medium tracking-wide'
                    >
                        <span
                            className='text-textColor'
                        >
                            Price:{" "}
                        </span>
                        <p className="text-primary">
                            &#2547;{findProduct?.price}
                        </p>
                    </div>
                </div>
            </div>
            <span
                onClick={() => dispatch(decreaseCartProduct(findProduct?.id))}
            >
                <RiCloseFill
                    className='text-2xl text-gray absolute top-2 right-2 cursor-pointer'
                />
            </span>
        </div>
    );
};

export default ProductCartListView;