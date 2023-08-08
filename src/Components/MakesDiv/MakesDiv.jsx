import { TbHandClick } from 'react-icons/tb';
import { IoIosOptions } from 'react-icons/io';
import { CiImageOn } from 'react-icons/ci';
import { BiNotification } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GoSync } from 'react-icons/go';
import { Fade } from 'react-awesome-reveal';
// import { useRef } from 'react';
const MakesDiv = () => {
    // const sectionRef = useRef(null);
    return (
        <div className='bg-white pb-16 shadow-2xl' >
            <div className="text-center pt-20 mb-16">
                <h1 className="lg:text-5xl text-3xl font-bold lg:mb-8 mb-4">What Makes RackUp Different</h1>
                <p className='text-xl text-justify lg:text-center text-slate-400 lg:px-36 md:px-24 px-6'>
                    &quot;RackUp stands out with its seamless integration of cutting-edge technologies, creating a unified user experience across Android, iOS, and web platforms. Our startup takes personalized service to new heights, tailoring solutions that fit the unique needs of each individual user.&quot;
                </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-2 lg:px-20 px-2'>

                <Fade direction='up'>
                    <div className='lg:w-80 w-96 flex  mb-4 '>
                        <span>
                            <TbHandClick className='text-5xl pt-1 text-slate-600 mr-3'></TbHandClick>
                        </span>
                        <span className='lg:pe-0 md:pe-0 pe-6'>
                            <h1 className='text-xl font-bold mb-2'>
                                Friendly Interface
                            </h1>
                            <p className='text-justify'>
                                &quot;User satisfaction is priority. RackUp excels in user-friendly design for seamless app and web navigation, ensuring delightful experiences.&quot;
                            </p>
                        </span>
                    </div>
                </Fade>
                <Fade direction='up'>
                    <div className='lg:w-80 w-96 flex  mb-4'>
                        <span>
                            <IoIosOptions className='text-5xl pt-1 text-slate-600 mr-3'></IoIosOptions>
                        </span>
                        <span className='lg:pe-0 md:pe-0 pe-6'>
                            <h1 className='text-xl font-bold mb-2'>
                                Powerful Options
                            </h1>
                            <p className='text-justify'>
                                Robust toolset ignites transformative change, revolutionizing operations, boosting productivity, unlocking untapped potential for growth and success
                            </p>
                        </span>
                    </div>
                </Fade>
                <Fade direction='up'>
                    <div className='lg:w-80 w-96 flex  mb-4'>
                        <span>
                            <CiImageOn className='text-5xl pt-1 text-slate-600 mr-3'></CiImageOn>

                        </span>
                        <span className='lg:pe-0 md:pe-0 pe-6'>
                            <h1 className='text-xl font-bold mb-2'>
                                Uninterrupted Support
                            </h1>
                            <p className='text-justify'>
                                Round the clock - our Eternal Availability ensures your needs are met anytime, empowering seamless progress.
                            </p>
                        </span>
                    </div>
                </Fade>
                <Fade direction='up'>
                    <div className='lg:w-80 w-96 flex  mb-4'>
                        <span>
                            <BiNotification className='text-5xl pt-1 text-slate-600 mr-3'></BiNotification>
                        </span>
                        <span className='lg:pe-0 md:pe-0 pe-6'>
                            <h1 className='text-xl font-bold mb-2'>
                                Instant Notifications
                            </h1>
                            <p className='text-justify'>
                                Real-time alerts, lightning-fast - Instant Notifications keep you in the loop, ensuring you never miss a beat again!
                            </p>
                        </span>
                    </div>
                </Fade>



                <Fade direction='up'>
                    <div className='lg:w-80 w-96 flex  mb-4'>
                        <span>

                            <HiOutlineLocationMarker className='text-5xl pt-1 text-slate-600 mr-3'></HiOutlineLocationMarker>
                        </span>
                        <span className='lg:pe-0 md:pe-0 pe-6'>
                            <h1 className='text-xl font-bold mb-2'>
                                Real-Time Location
                            </h1>
                            <p className='text-justify'>
                                Pinpoint precision at your fingertips - Real-Time Location empowers you to track, navigate, and conquer with confidence!
                            </p>
                        </span>
                    </div>
                </Fade>



                <Fade direction='up'>
                    <div className='lg:w-80 w-96 flex  mb-4'>
                        <span>
                            <GoSync className='text-5xl pt-1 text-slate-600 mr-3'></GoSync>

                        </span>
                        <span className='lg:pe-0 md:pe-0 pe-6'>
                            <h1 className='text-xl font-bold mb-2'>
                                Super Fast Sync
                            </h1>
                            <p className='text-justify'>
                                Blink and it&apos;s synced - Super Fast Sync ensures your data is lightning quick, keeping you ahead of the game!
                            </p>
                        </span>
                    </div>
                </Fade>

            </div>
        </div>
    );
};

export default MakesDiv;