import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Cookies = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>RackUp-Cookies</title>
                <link rel="canonical" href="/cookies" />
                <meta name="description" content="RackUp Cookies Page" />
                <meta name="keywords" content="Rackup,android,website,webpage,cookies" />
            </Helmet>
            <div className="p-4 bg-white ">
                <h1><span className="text-sky-400 mr-3 lg:ms-12 text-xl font-semibold"><Link to='/'><u>Home</u></Link></span>&gt;&gt;<span className="text-slate-500 text-xl mx-3 font-semibold">Cookie Policy</span></h1>
            </div>
            <div className=" lg:mx-52 md:mx-32 mx-6 lg:text-justify md:text-justify lg:pt-28 md:pt-28 pt-12 pb-10">
                <h1 className="text-xl text-slate-300 mb-5">Last Updated: February 12, 2023</h1>
                <div>
                    <h1 className="text-xl mb-2 font-semibold">
                        At RackUp, we use cookies and similar tracking technologies to enhance your experience and improve our services. This Cookie Policy explains how we deploy cookies on our website and the choices you have regarding their use.
                    </h1>

                </div>

                <div>
                    <h1 className="text-xl font-bold py-6">
                        1. What are Cookies:
                    </h1>
                    <p className="font-serif">
                        Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us recognize your device and remember certain information about your visit.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        2. Types of Cookies
                    </h1>
                    <p className="font-serif">
                        We use session cookies that expire after you close your browser and persistent cookies that stay on your device for a set period. We also utilize first-party cookies (set by RackUp) and third-party cookies (set by our partners).
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        3. Purpose of Cookies
                    </h1>
                    <p className="font-serif">
                        We use cookies for various purposes, including website functionality, performance monitoring, analytics, and personalization of content and ads
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        4. Analytics and Performance
                    </h1>
                    <p className="font-serif">
                        We use cookies to analyze user behavior, track website performance, and improve our services based on aggregated data.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        5. Advertising
                    </h1>
                    <p className="font-serif">
                        Cookies enable us to display relevant ads to you and measure the effectiveness of our advertising campaigns
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        6.Your Choices
                    </h1>
                    <p className="font-serif">
                        You can manage your cookie preferences through your browser settings. However, please note that disabling certain cookies may impact the functionality and performance of our website.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        7.  Consent
                    </h1>
                    <p className="font-serif">
                        By continuing to use RackUp&apos;s website, you consent to the use of cookies as outlined in this policy
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        8. Changes to Cookie Policy:
                    </h1>
                    <p className="font-serif">
                        We may update this Cookie Policy from time to time. Any significant changes will be communicated through our website.
                    </p>

                </div>
                <div>
                    <h1 className="text-xl font-bold py-6">
                        9. Contact Us
                    </h1>
                    <p className="font-serif">
                        If you have any questions or concerns about our Cookie Policy or the use of cookies on our website, please contact us at <a href="mailto:rackupit@gmail.com" className="hover:underline font-bold"><i>rackupit@gmail.com</i></a>.
                    </p>

                </div>


            </div>
            <div className="lg:px-32 md:px-32 px-4 mb-20 font-bold">
                By using RackUp&apos;s services, you acknowledge that you have read, understood, and agreed to this Privacy Policy. For more details on how we handle your personal information, please review this Privacy Policy in full.
            </div>

        </div>
    );
};

export default Cookies;