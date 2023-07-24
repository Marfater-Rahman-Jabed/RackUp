import { Link } from "react-router-dom";
import CustomerReviewSection from "../../Components/CustomerReviewSection/CustomerReviewSection";
import { Fade } from "react-awesome-reveal";
import Logo from '../../assets/Logo.jpg'
import { AiOutlineStar } from "react-icons/ai";

const ClientReviews = () => {
    return (
        <div>
            <div className="p-4 bg-base-300 ">
                <h1><span className="text-sky-400 mr-3 lg:ms-12 text-xl font-semibold"><Link to='/'><u>Home</u></Link></span>&gt;&gt;<span className="text-slate-500 text-xl mx-3 font-semibold">Client`s Reviews</span></h1>
            </div>
            <div className='lg:flex md:flex items-center justify-between lg:mx-16 md:mx-10 mx-8 mb-4'>
                <div className="flex lg:mx-20 p-10">
                    <span className='mr-6'>
                        <img src={Logo} alt="" className='w-24 h-24 rounded-md' />
                    </span>
                    <span>
                        <h1 className='text-3xl font-bold'>RackUp</h1>
                        <div className="flex ">
                            <AiOutlineStar className="text-2xl  rounded-full"></AiOutlineStar>
                            <AiOutlineStar className="text-2xl  rounded-full"></AiOutlineStar>
                            <AiOutlineStar className="text-2xl  rounded-full"></AiOutlineStar>
                            <AiOutlineStar className="text-2xl  rounded-full"></AiOutlineStar>
                            <AiOutlineStar className="text-2xl  rounded-full"></AiOutlineStar>
                        </div>
                        <h1>4.6/5 based on 1.014 ratings</h1>
                    </span>
                </div>
                <div>
                    <button className='btn btn-primary rounded-full mx-2'><Link to='/contact'>Write A Review</Link></button>
                    <button className='btn btn-outline rounded-full mx-2'><Link to='/faqs'>Ask A Question</Link></button>
                </div>
            </div>
            <Fade duration={2000}>
                <CustomerReviewSection></CustomerReviewSection>
            </Fade>
        </div>
    );
};

export default ClientReviews;