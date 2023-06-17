import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { RootState } from '../../../app/store';
import profileImage from '../../../assets/profile.jpg';
import { setProfileMenu } from '../../../feauters/navbar/navbarSlice';
import ProfileMenus from './ProfileMenus';

const BigScreenMenus = ({ user }: any) => {
    const { profileMenu } = useSelector((state: RootState) => state.navbar)
    const dispatch = useDispatch()
    return (
        <div className="md:relative hidden md:flex md:gap-common-.75 md:items-center">
            {
                !user &&
                <>
                    <Link
                        to={"/login"}
                        className=''
                    >
                        Log in
                    </Link>
                </>
            }
            {
                user &&
                <div
                    onClick={() => dispatch(setProfileMenu())}
                    className='relative h-9 w-9 rounded-full cursor-pointer border border-primary overflow-hidden'>
                    <img
                        src={profileImage}
                        className='absolute object-cover h-full w-full'
                        alt=""
                    />
                </div>
            }
            <div
                className={`hidden ${profileMenu ? "md:flex flex-col items-center gap-common-.75 absolute top-9 right-7 w-72 h-80 bg-primary dark:bg-darkMode-contentBG overflow-y-auto box-border-color rounded-lg" : "md:hidden"}`}
            >
                <div className="w-full">
                    <ProfileMenus />
                </div>
            </div>
        </div>
    );
};

export default BigScreenMenus;