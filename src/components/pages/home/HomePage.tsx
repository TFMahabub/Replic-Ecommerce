import Banner from "./Banner";
import ProductSection from "./ProductSection";

const HomePage = () => {
    return (
        <>
            <header
                className="bg-white container headerHeight flex-center"
            >
                <Banner />
            </header>
            <section
                className="container space-y-partGap"
            >
                <ProductSection />
            </section>
        </>
    );
};

export default HomePage;