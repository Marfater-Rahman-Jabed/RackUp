import Logo5 from '../../assets/Hero-image-05.png'
const CrossPlatformSection = () => {
    return (
        <div className='bg-white pb-20 shadow-2xl dark:bg-slate-600 dark:text-white'>
            <div className='py-20 '>
                <h1 className="lg:text-5xl text-4xl text-center font-bold mb-6">RackUp Is Cross-Platform App</h1>
                <p className=" lg:text-center md:text-center text-justify text-slate-500 dark:text-white text-xl md:px-20 lg:px-64 px-4">
                    RackUp is your all-in-one app, available on Android, iOS, Windows, Mac, and the Web. Enjoy seamless cross-platform convenience and versatility!
                </p>
            </div>
            <div className='text-center'>
                <img src={Logo5} alt="" className=' ' />
            </div>
        </div>
    );
};

export default CrossPlatformSection;