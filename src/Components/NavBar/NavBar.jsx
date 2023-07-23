import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.jpg'

const NavBar = () => {
    return (
        <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
            <div className="navbar bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-white py-4 " style={{ backgroundImage: "linear-gradient(180deg, purple 1px, 1px)", backgroundSize: "3px 3px" }}>
                <div className="lg:navbar-start ">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Pages</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                            <li>
                                <a>Blogs</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div className='flex lg:mx-4 '>
                        <img src={Logo} alt="" className='w-20 h-20 rounded-full mr-2' />
                        <Link to='/' className=" normal-case text-5xl mt-4 font-bold" >RACKUP</Link>
                    </div>
                </div>
                <div className="navbar-center md:navbar-end hidden lg:flex md:flex me-6">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Pages</summary>
                                <ul className="p-2">
                                    <li className='text-black'><a>Submenu 1</a></li>
                                    <li className='text-black'><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Blogs</summary>
                                <ul className="p-2">
                                    <li className='text-black'><a>Submenu 1</a></li>
                                    <li className='text-black'><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;