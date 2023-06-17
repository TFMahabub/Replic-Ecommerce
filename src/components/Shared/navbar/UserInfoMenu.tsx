import profileImage from '../../../assets/profile.jpg';

const UserInfoMenu = () => {
    return (
        <>
            <div
                className='relative h-12 w-12 rounded-lg overflow-hidden'
            >
                <img
                    src={profileImage}
                    className='absolute object-cover object-center'
                    alt=""
                />
            </div>
        </>
    );
};

export default UserInfoMenu;