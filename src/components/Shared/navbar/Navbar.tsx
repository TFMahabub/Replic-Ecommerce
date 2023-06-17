import { RiCloseFill, RiMenuFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { RootState } from "../../../app/store";
import { setHamburgerMenu } from "../../../feauters/navbar/navbarSlice";
import TextNavMenu from '../../../utils/ReUseCom/TextNavMenu';
import BigScreenMenus from "./BigScreenMenus";
import SmallScreenMenus from './SmallScreenMenus';

const Navbar = () => {
    const { hamburgerMenu } = useSelector((state: RootState) => state.navbar)
    const dispatch = useDispatch()

    const user = true;
    return (

        <div
            className='container'
        >
            <div className='flex items-center justify-between flex-wrap'>
                <div className='flex items-center gap-2 md:gap-4'>
                    <Link to={"/"}>
                        <p
                            className='text-2xl font-semibold text-primary'
                        >Replic Ecommerce</p>
                    </Link>
                </div>
                <div className='flex items-center gap-common'>
                    {/* -----------common-menus----------- */}
                    <div
                        onClick={() => dispatch(setHamburgerMenu())}
                        className='cursor-pointer md:hidden'
                    >
                        {!hamburgerMenu &&
                            <RiMenuFill
                                className="text-3xl" />}
                        {hamburgerMenu &&
                            <RiCloseFill
                                className="text-3xl" />}
                    </div>
                    <div className='flex-item gap-common'>
                        <Link
                            to={'/'}
                        >
                            <TextNavMenu>
                                Home
                            </TextNavMenu>
                        </Link>
                        <Link
                            to={'/login'}
                        >
                            <TextNavMenu>
                                Log in
                            </TextNavMenu>
                        </Link>
                        <Link
                            to={'/register'}
                        >
                            <TextNavMenu>
                                Create Account
                            </TextNavMenu>
                        </Link>
                    </div>
                    {/* -----------common-menus----------- */}
                    <BigScreenMenus
                        user={user}
                    />
                </div>
            </div>
            <div
                className={`transform transition-all duration-300 ease-linear ${hamburgerMenu ? "flex flex-col items-center gap-common lg:hidden pb-common-1" : "hidden h-0"}`}
            >
                <SmallScreenMenus
                    user={user}
                />
            </div>
        </div>
    );
};

export default Navbar;