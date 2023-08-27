import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AppDemo = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="dark:bg-slate-600 pb-16">
            <Helmet>
                <meta charSet="utf-8" />
                <title>RackUp-Blog</title>
                <link rel="canonical" href="/appdemo" />
                <meta name="description" content="RackUp Blog Page" />
                <meta name="keywords" content="Rackup,android,website,webpage,blog" />
            </Helmet>
            <div className="p-4 bg-white dark:bg-slate-600 dark:text-white">
                <h1><span className="text-sky-400 mr-3 lg:ms-12 text-xl font-semibold"><Link to='/'><u>Home</u></Link></span>&gt;&gt;<span className="text-slate-500 dark:text-white text-xl mx-3 font-semibold">App Demo</span></h1>
            </div>
            <div className='py-20  '>
                <h1 className="lg:text-5xl text-3xl text-center mb-5 font-bold  dark:text-white">Get Idea About Our APP&apos;S Experience .</h1>
                <p className="text-center text-xl text-slate-400 dark:text-white lg:px-28 md:px-24 px-4">
                    Our Some demo product is presented here which is delevered already to the client. You can get idea from here about our company. Explore all the demo specificly.
                </p>
            </div>
            <div className="">

                <div className='flex justify-center items-center h-full  '>
                    <div className='flex justify-center items-center h-full'>
                        <p className='text-7xl font-bold text-pink-500'>C</p>
                        <p className='w-10 h-10 border-8 rounded-full animate-spin border-dashed mt-6 border-purple-900'> </p>
                        <p className='text-7xl font-bold text-pink-500'>mingS</p>
                        <p className='w-10 h-10 border-8 rounded-full animate-spin border-dashed mt-6 border-purple-900 mx-1'> </p>
                        <p className='w-10 h-10 border-8 rounded-full animate-spin border-dashed mt-6 border-purple-900'> </p>
                        <p className='text-7xl font-bold text-pink-500'>n</p>
                        <p className='border-4 mt-10 border-purple-900 border-dotted  animate-pulse mx-1'></p>
                        <p className='border-4 mt-10 border-purple-900 border-dotted  animate-pulse mx-1'></p>
                        <p className='border-4 mt-10 border-purple-900 border-dotted  animate-pulse mx-1'></p>
                        <p className='border-4 mt-10 border-purple-900 border-dotted  animate-pulse mx-1'></p>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default AppDemo;