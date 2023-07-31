import { Link } from 'react-router-dom';
import Logo from '../../assets/lastNav.png'

const NavBar = () => {
    return (
        <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
            <div className="navbar bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-white py-4 " style={{ backgroundImage: "linear-gradient(180deg, purple 1px, 1px)", backgroundSize: "3px 3px" }}>
                <div className="lg:navbar-start md:navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><Link to='/'>Home</Link></li>
                            <li>
                                <a>Pages</a>
                                <ul className="p-2">

                                    <li className='text-black font-semibold '><Link to='/makeDiv'>Our Goal</Link></li>
                                    <li className='text-black font-semibold '><Link to='/pricing'>Pricing</Link></li>
                                    <li className='text-black font-semibold '><Link to='/reviews'>Review</Link></li>
                                    <li className='text-black font-semibold '><Link to='/faqs'>FAQs</Link></li>
                                    <li className='text-black font-semibold '><Link to='/terms'>Terms</Link></li>

                                </ul>
                            </li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li>
                                <a>Blogs</a>
                                <ul className="p-2">
                                    <li><Link to='/blog1'>Business Blog</Link></li>
                                    <li className='text-black'><Link to='/blog2'>Website Blog</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div className='flex lg:mx-4 md:mx-6'>

                        <Link to='/' className="" >
                            <img src={Logo} alt="" className=' h-24  ' />
                        </Link>
                    </div>
                </div>
                <div className="lg:navbar-end md:navbar-center  hidden lg:flex md:flex lg:me-6 ">
                    <ul className="menu menu-horizontal px-1 ">
                        <li className='text-xl font-bold  hover:bg-pink-500 rounded-md'><Link to='/' className='hover:text-white'>Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary className='text-xl font-bold hover:text-white hover:bg-pink-500'>Pages</summary>
                                <ul className="p-4">

                                    <li className='text-black font-semibold '><Link to='/makeDiv'>Our Goal</Link></li>
                                    <li className='text-black font-semibold '><Link to='/pricing'>Pricing</Link></li>
                                    <li className='text-black font-semibold '><Link to='/reviews'>Review</Link></li>
                                    <li className='text-black font-semibold '><Link to='/faqs'>FAQs</Link></li>
                                    <li className='text-black font-semibold '><Link to='/terms'>Terms</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li className='text-xl font-bold hover:text-white hover:bg-pink-500 rounded-md'><Link to='/contact' className='hover:text-white'>Contact</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary className='text-xl font-bold hover:text-white hover:bg-pink-500'>Blogs</summary>
                                <ul className="p-2">
                                    <li><Link to='/blog1' className='text-black'>App Blog</Link></li>
                                    <li className='text-black'><Link to='/blog2'>Website Blog</Link></li>
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