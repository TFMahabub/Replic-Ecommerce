import FaqQuestionCart from "../../Cart/FaqQuestionCart";

const FaqSection = () => {
    return (
        <section className="container dark:text-gray-100">
            <div className="flex flex-col justify-center py-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 text-textColor">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                <div className="space-y-4 text-textColor">
                    {
                        [...Array(4)].map((_, i) => <FaqQuestionCart key={i} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default FaqSection;