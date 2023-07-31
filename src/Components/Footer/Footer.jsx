import { Link } from 'react-router-dom';
import Logo from '../../assets/NavBarImageFull.png'
const Footer = () => {
    return (
        <div className=''>
            <footer className="footer p-10 bg-black text-white">
                <div>
                    <img src={Logo} alt="" className=' w-52 h-20 mb-4' />
                    <p>RackUp IT Solution.<br />Providing reliable tech since 2023</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Enterprise Resources Planning (ERP)</a>
                    <a className="link link-hover">Supply Chain Management</a>
                    <a className="link link-hover">Inventory Management </a>
                    <a className="link link-hover">Mobile Application</a>
                    <a className="link link-hover">Windows Application</a>
                    <a className="link link-hover">Web Application</a>

                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover" to='/about'>About us</Link>
                    <Link className="link link-hover" to='/contact'>Contact</Link>
                    <Link className="link link-hover" to='/contact'>Jobs</Link>

                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover" to='/terms'>Terms of use</Link>
                    <Link className="link link-hover" to='/privacy'>Privacy policy</Link>
                    <Link className="link link-hover" to='/cookies'>Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;