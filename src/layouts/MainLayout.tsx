import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/footer/Footer';
import Navbar from '../components/Shared/navbar/Navbar';

const MainLayout = () => {
    return (
        <section>
            <nav
                className="h-full py-4 lg:py-0 lg:h-navbarHeight flex-item bg-primary border-b-2 border-secondary"
            >
                <Navbar />
            </nav>
            <main
                className='space-y-sectionGap'
            >
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default MainLayout;