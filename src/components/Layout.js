import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <Link to="/quienes-somos">Quienes Somos</Link>
                </nav>
                <Outlet />
        </>
    );
};
export default Layout;
