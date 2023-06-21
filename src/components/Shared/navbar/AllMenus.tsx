import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import TextNavMenu from '../../../utils/ReUseCom/TextNavMenu';

const AllMenus = ({ user, cartProducts }: { user: boolean, cartProducts: any }) => {
    return (
        <>
            {
                !user &&
                <>
                    <Link
                        to={"/register"}
                        className=''
                    >
                        <TextNavMenu>
                            Create Account
                        </TextNavMenu>
                    </Link>
                    <Link
                        to={"/login"}
                        className=''
                    >
                        <TextNavMenu>
                            Log In
                        </TextNavMenu>
                    </Link>
                    <Link
                        to={"/dashbord"}
                        className=''
                    >
                        <TextNavMenu>
                            Dashbord
                        </TextNavMenu>
                    </Link>
                    <Link
                        to={"/checkout"}
                        className=''
                    >
                        <span
                            className='relative'
                        >
                            <RiShoppingCart2Line
                                className="text-2xl text-white"
                            />
                            <small
                                className='flex-center absolute -top-2 -right-2 h-4 w-4 bg-secondary rounded-full '
                            >
                                {cartProducts.length}
                            </small>
                        </span>
                    </Link>
                </>
            }
        </>
    );
};

export default AllMenus;