import { useEffect } from "react";
import { Helmet } from "react-helmet";
// import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="dark:bg-slate-600 dark:text-white">
            <Helmet>
                <meta charSet="utf-8" />
                <title>RackUp-Terms</title>
                <link rel="canonical" href="/terms" />
                <meta name="description" content="RackUp Terms Page" />
                <meta name="keywords" content="Rackup,android,website,webpage,terms" />
            </Helmet>
            <div className="p-4 bg-white dark:bg-slate-600 dark:text-white">
                <h1><span className="text-sky-400 mr-3 lg:ms-12 text-xl font-semibold"><Link to='/'><u>Home</u></Link></span>&gt;&gt;<span className="text-slate-500 dark:text-white text-xl mx-3 font-semibold">Terms of Uses</span></h1>
            </div>
            <div className=" lg:mx-52 md:mx-32 mx-6 lg:text-justify md:text-justify lg:pt-28 md:pt-28 pt-12 pb-10">
                <h1 className="text-xl text-slate-300 mb-5">Last Updated: February 12, 2023</h1>
                <div>
                    <h1 className="text-xl mb-2 font-semibold">
                        Welcome to RackUp! By accessing and using our website and services, you agree to abide by the following Terms of Use:
                    </h1>

                </div>

                <div>
                    <h1 className="text-xl font-bold py-6">
                        1. Eligibility
                    </h1>
                    <p className="font-serif">
                        You must be at least 18 years old to use our services or have parental consent if you are under 18.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        2. User Conduct
                    </h1>
                    <p className="font-serif">
                        You agree not to engage in any activity that violates applicable laws, infringes on intellectual property rights, or disrupts our services
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        3. Intellectual Property
                    </h1>
                    <p className="font-serif">
                        All content on our website, including logos and trademarks, is the property of RackUp and is protected by copyright laws.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        4. Privacy Policy
                    </h1>
                    <p className="font-serif">
                        Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        5. Third-Party Links
                    </h1>
                    <p className="font-serif">
                        Our website may contain links to third-party websites. RackUp is not responsible for the content or actions of these websites.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        6. Disclaimer of Warranty
                    </h1>
                    <p className="font-serif">
                        RackUp provides its services &quot;as is&quot; without any warranties, express or implied.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        7. Limitation of Liability
                    </h1>
                    <p className="font-serif">
                        RackUp shall not be liable for any damages arising from the use or inability to use our services
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        8. Indemnification
                    </h1>
                    <p className="font-serif">
                        You agree to indemnify and hold RackUp harmless from any claims, damages, or losses arising from your use of our services.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        9. Modifications
                    </h1>
                    <p className="font-serif">
                        RackUp reserves the right to modify or discontinue any part of its services or these Terms of Use at any time.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        10. Governing Law
                    </h1>
                    <p className="font-serif">
                        These Terms of Use are governed by the laws of [Your Country/State], without regard to its conflicts of law principles.
                    </p>

                </div>

            </div>
            <div className=" lg:px-32 md:px-32 px-4 pb-20 font-bold">
                By using RackUp&apos;s services, you acknowledge that you have read, understood, and agreed to these Terms of Use. If you do not agree with any part of these terms, please refrain from using our website and services. For any questions or concerns, please contact us at <a href="mailto:rackupit@gmail.com" className="hover:underline font-bold"><i>rackupit@gmail.com</i></a>.
            </div>
        </div>
    );
};

export default Terms;