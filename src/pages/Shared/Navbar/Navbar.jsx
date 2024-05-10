import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import useAuth from "../../../hooks/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
    const { user, logOut } = useAuth();
    // const { user, logOut } = useContext(AuthContext);

    // logout
    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {user? 
            <li><Link to="/bookings">My Bookings</Link></li>
        : <></>
        }
    </>

    return (
        <div className="bg-base-300 mb-4">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl">
                        <img className="h-[52px] md:h-[58px] lg:h-[65px]" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <div className="">
                        <button className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-none">Appointment</button>
                    </div>
                    {user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://i.ibb.co/TmsrwQs/user.png"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-4 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 font-bold">
                            {/* <li><a>Profile</a></li>
                            <li><a>Settings</a></li> */}
                            <li onClick={handleLogout}><a className="text-lg">Logout</a></li>
                        </ul>
                    </div>
                        : <button>Login</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;