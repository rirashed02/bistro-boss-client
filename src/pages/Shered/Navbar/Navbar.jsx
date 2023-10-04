import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navBarOptions = <>
        <li className="text-white "><Link to="/" className="hover:text-white">HOME</Link></li>
        <li className="text-white "><Link className="hover:text-white">CONTACT US</Link></li>
        <li className="text-white "><Link className="hover:text-white">DASHBOARD</Link></li>
        <li className="text-white "><Link to='/menu' className="hover:text-white">OUR MENU</Link></li>
        <li className="text-white "><Link to='/order/salad' className="hover:text-white">ORDER FOOD</Link></li>
        <li className="text-white "><Link to='/secret' className="hover:text-white">SECRET</Link></li>
        {
            user ? <>
                {user?.displayName}
                <button onClick={handleLogOut} className="btn btn-ghost text-white hover:text-white">LOG OUT</button>
            </> : <>
                <li className="text-white "><Link to='/login' className="hover:text-white">LOGIN</Link></li>
            </>
        }

        {/* <Link to="/" className="mr-10 text-white"><li>HOME</li></Link>
        <Link className="mr-10 text-white"><li>CONTACT US</li></Link>
        <Link className="mr-10 text-white"><li>DASHBOARD</li></Link>
        <Link to='/menu' className="mr-10 text-white"><li>OUR MENU</li></Link>
        <Link to='/order/salad' className="text-white"><li>ORDER FOOD</li></Link>
        <Link to='/login' className="text-white"><li>Login</li></Link> */}
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-20 bg-black max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navBarOptions}
                        </ul>
                    </div>
                    <p className=" normal-case text-white font-Cinzel text-xl"><p className="block">BISTRO BOSS</p> <span>RESTAURANT</span></p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {navBarOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;