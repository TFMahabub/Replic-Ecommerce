import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/navbar/Navbar';
import RootSidebar from '../components/pages/dashbord/RootSidebar';

const DashbordLayout = () => {
    //get params query:
    // const { path } = useParams()

    // console.log(path);

    return (
        <section>
            <nav
                className="h-full py-4 lg:py-0 lg:h-navbarHeight flex-item bg-primary border-b-2 border-secondary"
            >
                <Navbar />
            </nav>
            <section
                className='container mt-6 grid grid-cols-12 gap-6'
            >
                <aside
                    id='sideBarLinks'
                    className='col-span-3 h-[calc(100vh-5.5rem)] border border-gray/40 bg-white rounded-lg'
                >
                    <h4
                        className='text-lg font-semibold text-primary text-center py-2 bg-primary/20'
                    >{import.meta.env.VITE_APP_COMPANY_NAME}</h4>
                    <ul
                        className='mt-6 px-4'
                    >
                        <RootSidebar />
                    </ul>
                </aside>
                <main
                    className='col-span-9 px-2 pb-1 border border-gray/40 bg-white rounded-lg h-[calc(100vh-5.5rem)] overflow-y-auto scroll-none'
                >
                    <Outlet />
                </main>
            </section>
        </section>
    );
};

export default DashbordLayout;