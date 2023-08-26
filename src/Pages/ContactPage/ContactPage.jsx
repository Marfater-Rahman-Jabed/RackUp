import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dyb2ri7', 'template_1ak3npt', form.current, 'o330KbaAw7_vQv8NS')
            .then((result) => {
                console.log(result.text);
                toast.success('Your Email is received Successfully. We will try to replay within 24 hours. If any Emergency, please contact us with WhatsApp ', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="bg-white dark:bg-slate-600 dark:text-white">
            <Helmet>
                <meta charSet="utf-8" />
                <title>RackUp-Contact</title>
                <link rel="canonical" href="/contact" />
                <meta name="description" content="RackUp Contact Page" />
                <meta name="keywords" content="Rackup,android,website,webpage,Contact" />
            </Helmet>
            <div className="p-4 bg-white dark:bg-slate-600 dark:text-white">
                <h1><span className="text-sky-400 mr-3 lg:ms-12 text-xl font-semibold"><Link to='/'><u>Home</u></Link></span>&gt;&gt;<span className="text-slate-500 dark:text-white text-xl mx-3 font-semibold">Contact</span></h1>
            </div>
            <div className='py-20  '>
                <h1 className="lg:text-5xl text-3xl text-center mb-5 font-bold ">Want To Get In Touch? We’re Listening.</h1>
                <p className="text-center text-xl text-slate-400 dark:text-white lg:px-28 md:px-24 px-4">
                    Our comprehensive Contact section has got you covered with all the answers you seek! No Hesitation, No Confusion, Feel Free to ask ! Don&apos;t be shy !
                </p>
            </div>
            <div className="lg:mx-80 md:mx-32 mx-4 pb-12 ">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text"><h1 className="font-semibold text-xl dark:text-white">This question is about:</h1>
                                <h1 className="text-slate-500 dark:text-white">Choose a topic, so we know who to send your request to:
                                </h1>
                            </span>

                        </label>
                        <select name='from_type' className="select select-bordered mb-6 h-16 dark:text-black">
                            <option disabled defaultValue={`This question is about`}>This question is about... </option>
                            <option value={`Registering/Authorising`}>Registering/Authorising</option>
                            <option value={`Using Application`}>Using Application</option>
                            <option value={`Back Up Store`}>Back Up Store</option>
                            <option value={`Storage problem`}>Storage problem</option>
                            <option value={`Others`}>Others</option>
                        </select>

                    </div>
                    <div className="form-control w-full mb-6">
                        <label className="label mb-2">
                            <span className="label-text"><h1 className="font-semibold text-xl dark:text-white">Your Name:</h1>
                                <h1 className="text-slate-500 dark:text-white">Please enter your real name:
                                </h1>
                            </span>

                        </label>
                        <input type="text" name='from_name' placeholder="Enter Your Name*" className="input input-bordered w-full h-16 dark:text-black" required />

                    </div>
                    <div className="form-control w-full mb-6">
                        <label className="label mb-2">
                            <span className="label-text"><h1 className="font-semibold text-xl dark:text-white">Your Email Address:</h1>
                                <h1 className="text-slate-500 dark:text-white">Please carefully check your email address for accuracy. If your address is incorrect, we will not be able to reply:
                                </h1>
                            </span>

                        </label>
                        <input type="email" name='from_email' placeholder="Type here" className="input input-bordered w-full h-16 dark:text-white" required />

                    </div>
                    <div className="form-control mb-6">
                        <label className="label mb-2">
                            <span className="label-text"><h1 className="font-semibold text-xl dark:text-white">Explain your question in details:</h1>
                                <h1 className="text-slate-500 dark:text-white">Your OS version, RackUp version build, steps you did. Be VERY precise!
                                </h1>
                            </span>

                        </label>
                        <textarea name='message' className="textarea textarea-bordered h-36 dark:text-black" placeholder="I hava a problem with..." required></textarea>

                    </div>
                    <div className="flex justify-end pt-6">
                        <input type="submit" value="Submit Request" className="btn btn-primary rounded-full font-bold" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;