import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
    const navigate = useNavigate();
    return (
        <form
            className="overflow-hidden rounded-full relative"
        >
            <input
                onFocus={() => navigate('/products')}
                type="text"
                name=""
                id=""
                className='navbar-search '
                placeholder="Search here..."
            />
            <button
                type="submit"
                className="absolute -translate-y-1/2 top-1/2 right-[5px] bg-secondary rounded-full h-[28px] w-[28px] flex-center cursor-pointer"
            >
                <RiSearchLine />
            </button>
        </form>
    );
};

export default SearchSection;