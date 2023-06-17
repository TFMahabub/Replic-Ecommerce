import { AiOutlineNotification } from 'react-icons/ai';
import { RiBookmarkLine, RiLogoutBoxRLine, RiNotification3Line, RiUser3Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { RootState } from '../../../app/store';
import { setProfileMenu } from '../../../feauters/navbar/navbarSlice';
import TextNavMenu from '../../../utils/ReUseCom/TextNavMenu';
import UserInfoMenu from './UserInfoMenu';

const ProfileMenus = () => {
    const { hamburgerMenu } = useSelector((state: RootState) => state.navbar)
    const dispatch = useDispatch()
    return (
        <>
            {/* ------------user-info------------ */}
            <div className="flex items-center justify-start gap-common px-common-1 py-common bg-bg-white pt-4 border-b border-border-light dark:border-border-dark">
                <UserInfoMenu />
            </div>
            {/* ------------down-menu------------ */}
            <Link
                to={'/my_profile/profile'}
                onClick={() => dispatch(setProfileMenu())}
                className='navbar-profile-menu-item'
            >
                <RiUser3Line />
                <TextNavMenu>Profile</TextNavMenu>
            </Link>
            <Link
                to={'/my_profile/notification'}
                onClick={() => dispatch(setProfileMenu())}
                className='navbar-profile-menu-item'
            >
                <RiNotification3Line />
                <TextNavMenu>Notification</TextNavMenu>
            </Link>
            <Link
                to={'/my_profile/bookmark'}
                onClick={() => dispatch(setProfileMenu())}
                className='navbar-profile-menu-item'
            >
                <RiBookmarkLine />
                <TextNavMenu>Bookmark</TextNavMenu>
            </Link>
            <Link
                to={'/my_profile/announcement'}
                onClick={() => dispatch(setProfileMenu())}
                className='navbar-profile-menu-item'
            >
                <AiOutlineNotification />
                <TextNavMenu>Announcement</TextNavMenu>
            </Link>
            <div className='navbar-profile-menu-item w-full'>
                <RiLogoutBoxRLine />
                <TextNavMenu>Logout</TextNavMenu>
            </div>
        </>
    );
};

export default ProfileMenus;