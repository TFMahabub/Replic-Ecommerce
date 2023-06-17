import ProfileMenus from "./ProfileMenus";

const SmallScreenMenus = ({ user }: any) => {
    return (
        <>
            {
                !user &&
                <>
                    <p>Home</p>
                </>
            }
            {
                user &&
                <div className="w-full">
                    <ProfileMenus />
                </div>
            }
        </>
    );
};

export default SmallScreenMenus;