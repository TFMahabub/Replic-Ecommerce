import TextDescription from "../../../utils/ReUseCom/TextDescription";
import TextSectionMenu from "../../../utils/ReUseCom/TextSectionMenu";
import FaqQuestionCart from "../../Cart/FaqQuestionCart";

const FaqSection = () => {
    return (
        <section className="container dark:text-gray-100">
            <div className="flex flex-col justify-center py-8 gap-common">
                <TextSectionMenu>
                    Frequently Asked Questions
                </TextSectionMenu>
                <TextDescription
                    varient="black"
                >
                    Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.
                </TextDescription>
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