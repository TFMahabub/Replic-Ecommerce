import TextSectionMenu from '../../../utils/ReUseCom/TextSectionMenu';
import ProductCart from '../../Cart/ProductCart';

const AllProducts = () => {
    return (
        <section
            className='container'
        >
            <div
                className='mt-sectionGap flex items-center justify-between'
            >
                <TextSectionMenu>All Products</TextSectionMenu>
                <div>
                    <p>Filtering options</p>
                </div>
            </div>
            <div
                className="mt-partGap flex justify-center flex-wrap gap-4"
            >
                {
                    [...Array(21)].map((_, i) => <ProductCart key={i} />)
                }
            </div>
        </section>
    );
};

export default AllProducts;