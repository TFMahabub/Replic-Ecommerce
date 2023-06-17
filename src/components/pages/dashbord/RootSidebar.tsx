import { Link, NavLink } from 'react-router-dom';

const RootSidebar = () => {
    return (
        <>
            <NavLink
                to={'/dashbord/admin'}
                className='dashbord-menu-item'
            >Admin
            </NavLink>
            <Link
                to={'/dashbord/customers'}
            >
                <li
                    className='dashbord-menu-item'

                >Customers</li>
            </Link>
            <Link
                to={'/dashbord/products'}
            >
                <li
                    className='dashbord-menu-item'
                >Products</li>
            </Link>
            <Link
                to={'/dashbord/order-list'}
            >
                <li
                    className='dashbord-menu-item'
                >Order List</li>
            </Link>
        </>
    );
};

export default RootSidebar;