import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>RackUp-About</title>
                <link rel="canonical" href="/about" />
                <meta name="description" content="RackUp About Page" />
                <meta name="keywords" content="Rackup,android,website,webpage,About" />
            </Helmet>
            <div className="p-4 bg-white ">
                <h1><span className="text-sky-400 mr-3 lg:ms-12 text-xl font-semibold"><Link to='/'><u>Home</u></Link></span>&gt;&gt;<span className="text-slate-500 text-xl mx-3 font-semibold">About Us</span></h1>
            </div>

            <div className=" lg:mx-52 md:mx-32 mx-6 lg:text-justify md:text-justify py-16">
                <div className="py-3">
                    Step into the world of innovation and efficiency with RackUp - your ultimate IT solution provider. With a keen focus on empowering small businesses, non-profit organizations, and personalized app or web services, we offer a diverse range of cutting-edge solutions for Android, iOS, web, Mac, and Windows platforms.
                </div>
                <div className="py-3">
                    Embrace seamless business management with our Enterprise Resources Planning (ERP) services, optimize your supply chain with meticulous Supply Chain Management, and achieve precise control over inventory, shops, pharmacies, and restaurants with our tailored solutions.
                </div>
                <div className="py-3">
                    Experience the magic of our mobile and web applications, meticulously crafted to elevate your productivity and engagement. At RackUp, our dedicated team strives to deliver excellence at every turn, ensuring a smooth and transformative IT journey for your organization.
                </div>
                <div className="py-3">
                    Join us today and discover the true meaning of elegance, functionality, and customer satisfaction. With RackUp by your side, success is not just a goal; it&apos;s a reality waiting to be unlocked.
                </div>





            </div>

        </div>
    );
};

export default About;