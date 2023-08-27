import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import './WebDemo.css'
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";
const WebDemo = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="dark:bg-slate-600">
            <Helmet>
                <meta charSet="utf-8" />
                <title>RackUp-WebDemo</title>
                <link rel="canonical" href="/webdemo" />
                <meta name="description" content="RackUp WebDemo Page" />
                <meta name="keywords" content="Rackup,android,website,webpage,blog" />
            </Helmet>


            <div className="p-4 bg-white dark:bg-slate-600 dark:text-white">
                <h1><span className="text-sky-400 mr-3 lg:ms-12 text-xl font-semibold"><Link to='/'><u>Home</u></Link></span>&gt;&gt;<span className="text-slate-500 dark:text-white text-xl mx-3 font-semibold">Web Demo</span></h1>
            </div>
            <div className='py-20  '>
                <h1 className="lg:text-5xl text-3xl text-center mb-5 font-bold  dark:text-white">Get Idea About Our Website Experience.</h1>
                <p className="text-center text-xl text-slate-400 dark:text-white lg:px-28 md:px-24 px-4">
                    Our Some demo product is presented here which is delevered already to the client. You can get idea from here about our company. Explore all the demo specificly.
                </p>
            </div>


            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  lg:px-16 md:px-4 px-1 pb-16">
                <Fade duration={2000} delay={500}>
                    <div className="cardss w-96 h-64 mb-6">
                        <div className="cardss w-96 h-64" style={{ backgroundImage: `url("https://i.ibb.co/zrRGL9N/hungrycafe.png")` }}>

                        </div>
                        <div className="overlays">
                            <h3 className="text-3xl font-bold mb-3">Restaurant Site</h3>
                            <a href="https://hungrycafe.web.app/" target="__blank" className="btns font-semibold">Live Preview</a>

                        </div>

                    </div>
                </Fade>
                <Fade duration={2000} delay={700}>
                    <div className="cardss w-96 h-64 mb-6">
                        <div className="cardss w-96 h-64" style={{ backgroundImage: `url("https://i.ibb.co/XS7th40/Screenshot-2.png")` }}>

                        </div>
                        <div className="overlays">
                            <h3 className="text-3xl font-bold mb-3">ECommerce Site</h3>
                            <a href="https://usedbookclient.web.app/" target="__blank" className="btns font-semibold">Live Preview</a>

                        </div>

                    </div>
                </Fade>
                <Fade duration={2000} delay={900}>
                    <div className="cardss w-96 h-64 mb-6">
                        <div className="cardss w-96 h-64" style={{ backgroundImage: `url("https://i.ibb.co/f23k3FN/doctors-Portal.png")` }}>

                        </div>
                        <div className="overlays">
                            <h3 className="text-3xl font-bold mb-3">Hospital Site</h3>
                            <a href="https://doctors-portal-77db2.web.app/" target="__blank" className="btns font-semibold">Live Preview</a>

                        </div>

                    </div>
                </Fade>
                <Fade duration={2000} delay={500}>
                    <div className="cardss w-96 h-64 mb-6">
                        <div className="cardss w-96 h-64" style={{ backgroundImage: `url("https://i.ibb.co/SVqX5qS/dragon-News.png")` }}>

                        </div>
                        <div className="overlays">
                            <h3 className="text-3xl font-bold mb-3">NEWS Portal site</h3>
                            <a href="https://dragon-news-a2e4c.web.app/" target="__blank" className="btns font-semibold">Live Preview</a>

                        </div>

                    </div>
                </Fade>
                <Fade duration={2000} delay={700}>
                    <div className="cardss w-96 h-64 mb-6">
                        <div className="cardss w-96 h-64" style={{ backgroundImage: `url("https://i.ibb.co/7v0qZmJ/LearnIt.png")` }}>

                        </div>
                        <div className="overlays">
                            <h3 className="text-3xl font-bold mb-3">Blog site</h3>
                            <a href="https://learn-it-world.web.app/" target="__blank" className="btns font-semibold">Live Preview</a>

                        </div>

                    </div>
                </Fade>
                <Fade duration={2000} delay={900}>
                    <div className="cardss w-96 h-64 mb-6">
                        <div className="cardss w-96 h-64 " style={{ backgroundImage: `url("https://i.ibb.co/M8QcSNP/transfort-Service.png")` }}>

                        </div>
                        <div className="overlays">
                            <h3 className="text-3xl font-bold mb-3">Travel Site</h3>
                            <a href="https://travel-service-908b3.web.app/" target="__blank" className="btns font-semibold">Live Preview</a>

                        </div>

                    </div>
                </Fade>
                <Fade duration={2000} delay={500}>
                    <div className="cardss w-96 h-64 mb-6">
                        <div className="cardss w-96 h-64 " style={{ backgroundImage: `url("https://i.ibb.co/cDM8yLp/logo.jpg")` }}>

                        </div>
                        <div className="overlays">
                            <h3 className="text-3xl font-bold mb-3">Portfolio Site</h3>
                            <a href="https://portfolio-60b17.web.app/" target="__blank" className="btns font-semibold">Live Preview</a>

                        </div>

                    </div>
                </Fade>
                <Fade duration={2000} delay={700}>
                    <div className="cardss w-96 h-64 mb-6">
                        <div className="cardss w-96 h-64 " style={{ backgroundImage: `url("https://i.ibb.co/RP4t7w2/Screenshot-25.png")` }}>

                        </div>
                        <div className="overlays">
                            <h3 className="text-3xl font-bold mb-3">Music Site</h3>
                            <a href="https://musicbrand.web.app/" target="__blank" className="btns font-semibold">Live Preview</a>

                        </div>

                    </div>
                </Fade>
                <Fade duration={2000} delay={900}>
                    <div className="cardss w-96 h-64 mb-6">
                        <div className="cardss w-96 h-64 " style={{ backgroundImage: `url("https://i.ibb.co/Vm5bfwd/Screenshot-28.png")` }}>

                        </div>
                        <div className="overlays">
                            <h3 className="text-3xl font-bold mb-3">Business Site</h3>
                            <a href="https://rackup-ba267.web.app/" target="__blank" className="btns font-semibold">Live Preview</a>

                        </div>

                    </div>
                </Fade>
            </div>


        </div>
    );
};

export default WebDemo;