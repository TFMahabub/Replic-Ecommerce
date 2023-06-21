import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { CartProduct } from "../../../feauters/navbar/navbarSlice";
import TextSectionMenu from "../../../utils/ReUseCom/TextSectionMenu";
import ProductCartListView from "../../Cart/ProductCartListView";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
    const { cartProducts } = useSelector((state: RootState) => state.navbar)
    return (
        <section
            className="container lg:flex"
        >
            <div
                className="mt-sectionGap flex-1 headerHeight w-full"
            >
                <TextSectionMenu>
                    Your All Products
                </TextSectionMenu>
                <div
                    className="mt-6 space-y-common h-[80%] max-w-[26rem] overflow-y-auto"
                >
                    {
                        cartProducts &&
                        cartProducts?.map((item: CartProduct) => <ProductCartListView
                            key={item?.id}
                            product={item}
                        />)
                    }
                </div>
            </div>
            <div
                className="pt-sectionGap flex-1 headerHeight bg-white w-full"
            >
                <h4
                    className="text-center text-xl text-textColor font-medium"
                >
                    Please submit you Information
                </h4>
                <CheckoutForm />
            </div>
        </section>
    );
};

export default Checkout;