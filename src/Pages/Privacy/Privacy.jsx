import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="dark:bg-slate-600 dark:text-white">
            <Helmet>
                <meta charSet="utf-8" />
                <title>RackUp-Privacy</title>
                <link rel="canonical" href="/privacy" />
                <meta name="description" content="RackUp Privacy Page" />
                <meta name="keywords" content="Rackup,android,website,webpage,RackUpPrivacy,privacy" />
            </Helmet>
            <div className="p-4 bg-white dark:bg-slate-600 dark:text-white">
                <h1><span className="text-sky-400 mr-3 lg:ms-12 text-xl font-semibold"><Link to='/'><u>Home</u></Link></span>&gt;&gt;<span className="text-slate-500 dark:text-white text-xl mx-3 font-semibold">Privacy Policy</span></h1>
            </div>
            <div className=" lg:mx-52 md:mx-32 mx-6 lg:text-justify md:text-justify lg:pt-28 md:pt-28 pt-12 pb-10">
                <h1 className="text-xl text-slate-300 mb-5">Last Updated: February 12, 2023</h1>
                <div>
                    <h1 className="text-xl mb-2 font-semibold">
                        Your privacy is of utmost importance to RackUp. This Privacy Policy outlines how we collect, use, and protect your personal information when you access and use our website and services. By using RackUp, you consent to the practices described below:
                    </h1>

                </div>

                <div>
                    <h1 className="text-xl font-bold py-6">
                        1. Information Collection
                    </h1>
                    <p className="font-serif">
                        We may collect personal information such as your name, email address, contact details, and payment information when you sign up or use our services
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        2. Use of Information
                    </h1>
                    <p className="font-serif">
                        We use the collected information to provide and improve our services, process transactions, communicate with you, and send relevant updates.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        3. Cookies and Tracking Technologies
                    </h1>
                    <p className="font-serif">
                        RackUp and its partners may use cookies and tracking technologies to enhance user experience and gather usage data.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        4. Third-Party Sharing
                    </h1>
                    <p className="font-serif">
                        We may share your information with trusted third-party service providers who assist us in delivering our services.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        5. Data Security
                    </h1>
                    <p className="font-serif">
                        RackUp employs industry-standard measures to protect your data from unauthorized access, loss, or misuse.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        6.Data Retention
                    </h1>
                    <p className="font-serif">
                        We will retain your personal information as long as necessary to fulfill the purposes outlined in this Privacy Policy
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        7.  Children&apos;s Privacy
                    </h1>
                    <p className="font-serif">
                        RackUp does not knowingly collect personal information from children under 13 years of age. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        8. Opt-Out
                    </h1>
                    <p className="font-serif">
                        You may opt-out of receiving promotional emails from RackUp at any time by following the instructions provided in the email.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        9. Updates
                    </h1>
                    <p className="font-serif">
                        RackUp reserves the right to update or modify this Privacy Policy as needed. We will notify you of any significant changes through our website or email.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        10. Contact Us
                    </h1>
                    <p className="font-serif">
                        If you have any questions or concerns about this Privacy Policy or our practices, please contact us at <a href="mailto:rackupit@gmail.com" className="hover:underline font-bold"><i>rackupit@gmail.com</i></a>.
                    </p>

                </div>

            </div>
            <div className="lg:px-32 md:px-32 px-4 pb-20 font-bold">
                By using RackUp&apos;s services, you acknowledge that you have read, understood, and agreed to this Privacy Policy. For more details on how we handle your personal information, please review this Privacy Policy in full.
            </div>
        </div>
    );
};

export default Privacy;