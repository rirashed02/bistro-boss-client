import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shered/Footer/Footer';
import Navbar from '../pages/Shered/Navbar/Navbar';

const Main = () => {
    const location = useLocation()
    console.log(location.pathname)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    console.log(noHeaderFooter)
    return (
        <div className='max-w-screen-xl mx-auto'>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;