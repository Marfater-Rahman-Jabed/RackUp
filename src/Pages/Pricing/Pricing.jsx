import { Link } from "react-router-dom";
import Starter from '../../assets/Starter.png'
import Basic from '../../assets/Basic.png'
import Premium from '../../assets/Premium.png'
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="pb-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>RackUp-Pricing</title>
                <link rel="canonical" href="/pricing" />
                <meta name="description" content="RackUp Pricing Page" />
                <meta name="keywords" content="Rackup,android,website,webpage,pricing, cost, rackupCost" />
            </Helmet>
            <div className="p-4 bg-white ">
                <h1><span className="text-sky-400 mr-3 lg:ms-12 text-xl font-semibold"><Link to='/'><u>Home</u></Link></span>&gt;&gt;<span className="text-slate-500 text-xl mx-3 font-semibold">Pricing Package</span></h1>
            </div>
            <div className="py-20">
                <h1 className="lg:text-5xl text-3xl font-bold  text-center mb-4">Try RackUp Free For 15 Days</h1>
                <p className=" lg:text-center text-justify text-xl mx-2">You start with a free trial. We don’t collect your credit card until you&apos;ve  <br />determined RackUp is the right landing page to promote your App or product.</p>
            </div>
            <div className="grid  lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 lg:mx-20  mx-4">
                <div className='border-4 border-slate-100 rounded-lg p-12 shadow-lg'>
                    <img src={Starter} alt="" className='w-32 lg:mx-16 md:mx-4 mx-16 items-center' />
                    <h1 className='text-center text-2xl font-bold my-4'>Starter</h1>
                    <h1 className='text-center text-2xl mb-8'><b className='text-5xl font-bold'>$0</b>/mo</h1>
                    <h1 className='text-center text-xl mb-4'><b>10</b> User Tasks</h1><hr />
                    <h1 className='text-center text-xl mb-4'><b>5 GB</b> of Storage</h1><hr />
                    <h1 className='text-center text-xl mb-4 '><b>10 MongoDB</b> Database</h1><hr />
                    <h1 className='text-center text-xl mb-12 '> <b>Email</b> Support</h1>


                    <div className='text-center'>
                        <button className='btn btn-outline px-16  rounded-full'>Upgrade to pro</button>
                    </div>

                </div>
                <div className='border-4 border-slate-100 rounded-lg p-12 shadow-lg'>
                    <img src={Basic} alt="" className='w-32 lg:mx-16 md:mx-4 mx-16 items-center' />
                    <h1 className='text-center text-2xl font-bold my-4'>Basic</h1>
                    <h1 className='text-center text-2xl mb-8'><b className='text-5xl font-bold'>$39</b>/mo</h1>
                    <h1 className='text-center lg:text-xl mb-4'><b>50</b> User Tasks</h1><hr />
                    <h1 className='text-center lg:text-xl mb-4'><b>50 GB</b> of Storage</h1><hr />
                    <h1 className='text-center text-xl mb-4 '><b>50 MongoDB</b> Database</h1><hr />
                    <h1 className='text-center text-xl mb-12 '><b>12/7</b> Support</h1>


                    <div className='text-center'>
                        <button className='btn btn-outline px-16 bg-green-400 rounded-full'>Upgrade to pro</button>
                    </div>

                </div>
                <div className='border-4 border-slate-100 rounded-lg p-12 shadow-lg'>
                    <img src={Premium} alt="" className='w-32 lg:mx-16 md:mx-4 mx-16 items-center' />
                    <h1 className='text-center text-2xl font-bold my-4'>Premium</h1>
                    <h1 className='text-center text-2xl mb-8'><b className='text-5xl font-bold'>$99</b>/mo</h1>
                    <h1 className='text-center lg:text-xl mb-4'><b>100</b> User Tasks</h1><hr />
                    <h1 className='text-center lg:text-xl mb-4'><b>100 GB</b> of Storage</h1><hr />
                    <h1 className='text-center text-xl mb-4 '><b>50 MongoDB</b> Database</h1><hr />
                    <h1 className='text-center text-xl mb-12 '><b>24/7</b> Support</h1>
                    <div className='text-center'>
                        <button className='btn btn-outline px-16 rounded-full'>Upgrade to pro</button>
                    </div>

                </div>
            </div>
            <div>
                <h1 className="text-center text-xl pt-10 mb-10"><b>Note!</b> Prices may vary from location to location due to local taxation laws <br /> and conversion rates from U.S. Dollars.</h1>
            </div>
        </div>
    );
};

export default Pricing;