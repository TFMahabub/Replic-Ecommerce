import Banner from "./Banner";
import FaqSection from "./FaqSection";
import ProductSection from "./ProductSection";

const HomePage = () => {
    return (
        <>
            <header
                className={`headerHeight bg-[url('https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center relative`}
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