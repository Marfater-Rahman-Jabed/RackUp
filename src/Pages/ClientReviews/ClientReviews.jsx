import { Link } from "react-router-dom";
import CustomerReviewSection from "../../Components/CustomerReviewSection/CustomerReviewSection";
import { Fade } from "react-awesome-reveal";
import Logo from '../../assets/Logo.jpg'
import { AiOutlineStar } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
// import { useState } from "react";

const ClientReviews = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [closeModal, setCloseModal] = useState('')

    const handleReview = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const message = form.mess.value;
        console.log(email, message)
        setCloseModal('')
        console.log(email, message)
        toast.success('Thanks for your Review. Its inspired us for future. Stay with us', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        // console.log()
        const Review = {
            email: email,
            message: message
        };
        fetch(`https://bussiness-server.vercel.app/review`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Review)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)

            })
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>RackUp-Review</title>
                <link rel="canonical" href="/reviews" />
                <meta name="description" content="RackUp Review Page" />
                <meta name="keywords" content="Rackup,android,website,webpage,review" />
            </Helmet>
            <div className="p-4 bg-white ">
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
                <div className='mx-20'>
                    <label htmlFor="ConfirmModal" className="btn btn-outline rounded-full mx-2" onClick={() => setCloseModal('ok')}>Write A Review</label>

                </div>
            </div>
            <Fade duration={2000}>
                <CustomerReviewSection></CustomerReviewSection>
            </Fade>
            {/* You can open the modal using ID.showModal() method */}
            {/* <button className="btn" >open modal</button> */}
            {
                closeModal && <div>
                    <input name='' type="checkbox" id="ConfirmModal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="ConfirmModal" className="btn btn-md btn-circle absolute right-2 top-2" onClick={() => setCloseModal('')}>✕</label>
                            <h1 className='font-bold text-xl mb-2'>Share the experience the journey of RackUp</h1>

                            <form onSubmit={handleReview} >
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Enter Your Email</span>

                                    </label>
                                    <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered w-full " required />

                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Enter Your Reviews</span>

                                    </label>
                                    <textarea name='mess' className="textarea textarea-bordered h-24" placeholder="Enter Your Reviews" required></textarea>

                                </div>
                                <div className="flex justify-end pt-6">
                                    <input type="submit" value="Submit Request" className="btn btn-primary rounded-full font-bold" />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export default ClientReviews;