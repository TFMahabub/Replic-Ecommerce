import Banner from "./Banner";
import FaqSection from "./FaqSection";
import ProductSection from "./ProductSection";

const HomePage = () => {
    return (
        <>
            <header
                className="bg-white headerHeight flex-center"
            >
                <Banner />
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