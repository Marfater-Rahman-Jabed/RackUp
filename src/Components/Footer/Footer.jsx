import { Link } from 'react-router-dom';
import Logo from '../../assets/NavBarImageFull.png'
import { AiFillTwitterCircle, AiOutlineYoutube, AiFillLinkedin } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
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
                    <div className='flex'>
                        <a href="https://youtube.com/@RackUpITSolution?si=jd0qxj-2xuTKjZWy" target='__blank'><AiOutlineYoutube className='text-3xl mx-2'></AiOutlineYoutube></a>
                        <a href="https://x.com/RackUp_IT?t=rzuYNWpW7JVX9ocrkHfNeA&s=35" target='__blank'><AiFillTwitterCircle className='text-3xl mx-2'></AiFillTwitterCircle></a>
                        <a href="https://instagram.com/rackupit?igshid=OGQ5ZDc2ODk2ZA==" target='__blank'><BsInstagram className='text-3xl mx-2'></BsInstagram></a>
                        <a href="https://www.linkedin.com/company/rackup-it-solution/" target='__blank'><AiFillLinkedin className='text-3xl mx-2'></AiFillLinkedin></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;