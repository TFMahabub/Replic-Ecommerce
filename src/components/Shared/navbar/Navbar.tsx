import { RiCloseFill, RiMenuFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { RootState } from "../../../app/store";
import { setHamburgerMenu } from "../../../feauters/navbar/navbarSlice";
import AllMenus from './AllMenus';
import SearchSection from './SearchSection';

const Navbar = () => {
    const { hamburgerMenu, cartProducts } = useSelector((state: RootState) => state.navbar)
    const dispatch = useDispatch()

    const user = false;
    return (

        <div
            className='container'
        >
            <div className='flex items-center justify-between flex-wrap'>
                <div className='flex items-center gap-2 md:gap-4'>
                    <Link to={"/"}>
                        <p
                            className='text-2xl font-medium text-white'
                        >
                            {import.meta.env.VITE_APP_COMPANY_NAME}
                        </p>
                    </Link>
                    <SearchSection />
                </div>
                <div className='flex items-center gap-common'>
                    {/* -----------common-menus----------- */}
                    <div
                        onClick={() => dispatch(setHamburgerMenu())}
                        className='cursor-pointer md:hidden'
                    >
                        {!hamburgerMenu &&
                            <RiMenuFill
                                className="text-3xl text-white" />}
                        {hamburgerMenu &&
                            <RiCloseFill
                                className="text-3xl text-white" />}
                    </div>
                    {/* -----------common-menus----------- */}
                    <div
                        className='hidden lg:flex lg:items-center lg:gap-common'
                    >
                        <AllMenus
                            user={user}
                            cartProducts={cartProducts}
                        />

                    </div>
                </div>
            </div>
            <div
                className={`transform transition-all duration-300 ease-linear ${hamburgerMenu ? "mt-common flex flex-col items-center gap-1 lg:hidden pb-common-1" : "hidden h-0"}`}
            >
                <AllMenus
                    user={user}
                    cartProducts={cartProducts}
                />
            </div>
        </div>
    );
};

export default Navbar;