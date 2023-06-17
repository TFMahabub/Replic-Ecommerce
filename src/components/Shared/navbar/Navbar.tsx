import BigScreenMenus from "./BigScreenMenus";

const Navbar = () => {

    const user = false;
    return (

        <div
            className='container'
        >
            <div className='flex items-center justify-between flex-wrap'>
                <div className='flex items-center gap-2 md:gap-4'>
                    <link href={"/"}>
                        <img
                            className='md:w-full md:h-full'
                            alt=''
                        />
                    </link>
                </div>
                <div className='flex items-center gap-common'>
                    <BigScreenMenus
                        user={user}
                    />
                    {/* -----------common-menus----------- */}
                    <div
                        onClick={() => dispatch(setHamburgerMenu())}
                        className='cursor-pointer md:hidden'
                    >
                        {!hamburgerMenu && <HamburgerMenu />}
                        {hamburgerMenu && <XButton />}
                    </div>
                    {/* -----------common-menus----------- */}
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