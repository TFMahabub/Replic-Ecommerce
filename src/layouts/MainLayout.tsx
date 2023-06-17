import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/footer/Footer';
import Navbar from '../components/Shared/navbar/Navbar';

const MainLayout = () => {
    return (
        <section>
            <nav
                className="h-10 "
            >
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default MainLayout;