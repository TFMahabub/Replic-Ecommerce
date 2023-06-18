import { Link } from "react-router-dom";
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
                    to={'/'}
                >
                    <span
                        className="text-lg hover:text-primary duration-common underline text-textColor"
                    >See More</span>
                </Link>
            </div>
            <div
                className="flex flex-wrap gap-10"
            >
                {
                    [...Array(10)].map((_, i) => <ProductCart key={i} />)
                }
            </div>
        </>
    );
};

export default ProductSection;