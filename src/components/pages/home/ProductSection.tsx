import { Link } from "react-router-dom";
import { ProductType } from "../../../TypeInterfaces/ProductType";
import ProductData from '../../../data/Products.json';
import TextSectionMenu from "../../../utils/ReUseCom/TextSectionMenu";
import ProductCart from "../../Cart/ProductCart";

const ProductSection = () => {
    return (
        <>
            <div
                className="flex-item justify-between"
            >
                <TextSectionMenu>
                    Order Now
                </TextSectionMenu>
                <Link
                    to={'/products'}
                >
                    <span
                        className="text-lg hover:text-primary duration-common underline text-textColor"
                    >See More</span>
                </Link>
            </div>
            <div
                className="flex flex-wrap gap-4"
            >
                {
                    ProductData?.slice(0, 6)?.map((item: ProductType) => <ProductCart
                        key={item?.id}
                        product={item}
                    />)
                }
            </div>
        </>
    );
};

export default ProductSection;