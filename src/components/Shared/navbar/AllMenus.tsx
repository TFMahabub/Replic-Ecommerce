import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import TextNavMenu from '../../../utils/ReUseCom/TextNavMenu';

const AllMenus = ({ user }: { user: boolean }) => {
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
                    <span
                        className='relative'
                    >
                        <RiShoppingCart2Line
                            className="text-2xl text-white"
                        />
                        <small
                            className='flex-center absolute -top-2 -right-2 h-4 w-4 bg-secondary rounded-full '
                        >
                            {0}
                        </small>
                    </span>
                </>
            }
        </>
    );
};

export default AllMenus;