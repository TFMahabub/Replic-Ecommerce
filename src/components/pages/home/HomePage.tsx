import Banner from "./Banner";
import FaqSection from "./FaqSection";
import ProductSection from "./ProductSection";

const HomePage = () => {
    return (
        <>
            <header
                className="headerHeight bg-[url('https://pixabay.com/get/g907abd5ffb85f076eda52d5d2cc8cedbf439b65a1dfb06742a47cc6dcbd6966fbc88bf2e63c1c74c705193386c125665314d441c26160e83df975016e32e9308_1280.jpg')] bg-cover relative"
            >
                <div
                    className="bg-[#000]/70 absolute inset-0 flex-center"
                >
                    <Banner />
                </div>
            </header>
            <section
                className="container space-y-partGap"
            >
                <ProductSection />
            </section>
            <section
                className="bg-white space-y-partGap"
            >
                <FaqSection />
            </section>
        </>
    );
};

export default HomePage;