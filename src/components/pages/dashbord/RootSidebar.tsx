import { NavLink } from 'react-router-dom';

const RootSidebar = () => {
    return (
        <>
            <li>
                <NavLink
                    to={'/dashbord/admin'}
                    className={({ isActive }) => (isActive ? "dashbord-menu-item font-medium bg-primary/10" : "dashbord-menu-item")}
                >Admin
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/dashbord/customers'}
                    className={({ isActive }) => (isActive ? "dashbord-menu-item font-medium bg-primary/10" : "dashbord-menu-item")}
                >
                    Customers
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/dashbord/products'}
                    className={({ isActive }) => (isActive ? "dashbord-menu-item font-medium bg-primary/10" : "dashbord-menu-item")}
                >
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/dashbord/order-list'}
                    className={({ isActive }) => (isActive ? "dashbord-menu-item font-medium bg-primary/10" : "dashbord-menu-item")}
                >
                    Order List
                </NavLink>
            </li>
        </>
    );
};

export default RootSidebar;