import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const option = form.opt.value;
        const message = form.message.value

        // console.log(name, email, option, message)
        const SendMessage = {
            name, email, message, type: option
        }

        fetch(`http://localhost:5000/sendEmail`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(SendMessage)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Your Email Is successfully Received. We will try to reply within 24 hour. If Any Emergency Please contact us via WhatsApp.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                form.reset()
            })


    }
    return (
        <div className="bg-base-300 ">
            <div className="p-4 bg-base-300 ">
                <h1><span className="text-sky-400 mr-3 lg:ms-12 text-xl font-semibold"><Link to='/'><u>Home</u></Link></span>&gt;&gt;<span className="text-slate-500 text-xl mx-3 font-semibold">Contact</span></h1>
            </div>
            <div className='py-20  '>
                <h1 className="lg:text-5xl text-3xl text-center mb-5 font-bold ">Want To Get In Touch? We’re Listening.</h1>
                <p className="text-center text-xl text-slate-400">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero <br /> tempus, blandit posuere ligula varius magna congue cursus porta
                </p>
            </div>
            <div className="lg:mx-80 md:mx-32 mx-4 pb-12">
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text"><h1 className="font-semibold text-xl">This question is about:</h1>
                                <h1 className="text-slate-500">Choose a topic, so we know who to send your request to:
                                </h1>
                            </span>

                        </label>
                        <select name='opt' className="select select-bordered mb-6 h-16">
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
                            <span className="label-text"><h1 className="font-semibold text-xl">Your Name:</h1>
                                <h1 className="text-slate-500">Please enter your real name:
                                </h1>
                            </span>

                        </label>
                        <input type="text" name='name' placeholder="Enter Your Name*" className="input input-bordered w-full h-16" required />

                    </div>
                    <div className="form-control w-full mb-6">
                        <label className="label mb-2">
                            <span className="label-text"><h1 className="font-semibold text-xl">Your Email Address:</h1>
                                <h1 className="text-slate-500">Please carefully check your email address for accuracy. If your address is incorrect, we will not be able to reply:
                                </h1>
                            </span>

                        </label>
                        <input type="text" name='email' placeholder="Type here" className="input input-bordered w-full h-16" required />

                    </div>
                    <div className="form-control mb-6">
                        <label className="label mb-2">
                            <span className="label-text"><h1 className="font-semibold text-xl">Explain your question in details:</h1>
                                <h1 className="text-slate-500">Your OS version, RackUp version build, steps you did. Be VERY precise!
                                </h1>
                            </span>

                        </label>
                        <textarea name='message' className="textarea textarea-bordered h-36" placeholder="I hava a problem with..." required></textarea>

                    </div>
                    <div className="flex justify-end mt-6">
                        <input type="submit" value="Submit Request" className="btn btn-primary rounded-full font-bold" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;