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
                </>
            }
        </>
    );
};

export default AllMenus;