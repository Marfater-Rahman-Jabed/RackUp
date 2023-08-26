import { Link } from 'react-router-dom';
import Logo from '../../assets/lastNav.png'
import { MdDarkMode } from 'react-icons/md';
// import { CiLight } from 'react-icons/ci';
import { FiSun } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const NavBar = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDarkMode)
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme]);



    const handleSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }


    return (
        <div style={{ position: "sticky", top: 0, zIndex: 100 }} >
            <div className="navbar bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700  text-white  py-4 " style={{ backgroundImage: "linear-gradient(180deg, purple 1px, 1px)", backgroundSize: "3px 3px" }}>
                <div className="lg:navbar-start md:navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content pt-5 z-[1] p-2 shadow bg-white rounded-box w-52 text-black dark:bg-slate-800 dark:text-white">
                            <li><Link to='/'>Home</Link></li>
                            <li>
                                <a>Pages</a>
                                <ul className="p-2 bg-white dark:bg-slate-800 dark:text-white">

                                    <li className='text-black dark:text-white font-semibold '><Link to='/makeDiv'>Our Goal</Link></li>
                                    <li className='text-black dark:text-white font-semibold '><Link to='/pricing'>Pricing</Link></li>
                                    <li className='text-black dark:text-white font-semibold '><Link to='/reviews'>Review</Link></li>
                                    <li className='text-black dark:text-white font-semibold '><Link to='/faqs'>FAQs</Link></li>
                                    <li className='text-black dark:text-white font-semibold '><Link to='/terms'>Terms</Link></li>

                                </ul>
                            </li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li>
                                <a>Blogs</a>
                                <ul className="p-2 ">
                                    <li className='text-black dark:text-white font-semibold'><Link to='/blog1'>App Blog</Link></li>
                                    <li className='text-black dark:text-white font-semibold'><Link to='/blog2'>Website Blog</Link></li>
                                </ul>
                            </li>
                            <li>
                                <button onClick={handleSwitch} className=" ">{
                                    theme === "dark" ? <span className='flex dark:text-white'><FiSun className='text-2xl me-3 hover:text-white dark:text-white'></FiSun>Light</span> : <span className='flex '><MdDarkMode className='text-2xl  hover:text-white me-3'></MdDarkMode>Dark</span>
                                }</button>
                            </li>

                        </ul>
                    </div>
                    <div className='flex lg:mx-4 md:mx-6 '>

                        <Link to='/' className="" >
                            <img src={Logo} alt="" className=' lg:h-24 md:h-24 h-20 ' />
                        </Link>
                    </div>
                </div>
                <div className="lg:navbar-end md:navbar-center  hidden lg:flex md:flex lg:me-6 ">
                    <ul className="menu menu-horizontal px-1 ">
                        <li className='text-xl font-bold  hover:bg-pink-500 rounded-md'><Link to='/' className='hover:text-white dark:text-black'>Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary className='text-xl font-bold hover:text-white hover:bg-pink-500 dark:text-black'>Pages</summary>
                                <ul className="p-4 dark:bg-slate-800 dark:text-white">

                                    <li ><Link to='/makeDiv' className='text-black hover:text-white dark:text-white  font-semibold '>Our Goal</Link></li>
                                    <li ><Link to='/pricing' className='text-black dark:text-white font-semibold '>Pricing</Link></li>
                                    <li ><Link to='/reviews' className='text-black dark:text-white font-semibold '>Review</Link></li>
                                    <li ><Link to='/faqs' className='text-black dark:text-white font-semibold '>FAQs</Link></li>
                                    <li ><Link to='/terms' className='text-black dark:text-white font-semibold '>Terms</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li className='text-xl font-bold hover:text-white hover:bg-pink-500 rounded-md'><Link to='/contact' className='hover:text-white dark:text-black'>Contact</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary className='text-xl font-bold hover:text-white hover:bg-pink-500 dark:text-black'>Blogs</summary>
                                <ul className="p-2 dark:bg-slate-800 dark:text-white">
                                    <li><Link to='/blog1' className='text-black dark:text-white font-semibold '>App Blog</Link></li>
                                    <li ><Link to='/blog2' className='text-black dark:text-white font-semibold '>Website Blog</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <button onClick={handleSwitch} className="animate-bounce mt-1">{
                                theme === "dark" ? <FiSun className='text-2xl mt-1 '></FiSun> : <MdDarkMode className='text-2xl mt-1 hover:text-white'></MdDarkMode>
                            }</button>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;