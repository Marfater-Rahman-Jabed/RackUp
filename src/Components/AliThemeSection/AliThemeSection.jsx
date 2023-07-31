import { AiFillAndroid, AiFillApple } from 'react-icons/ai';
import Allfixer from '../../assets/AllFixer.png'
import AppSet from '../../assets/Appset.png'
import Mobicom from '../../assets/Mobicom.png'
import { Fade } from 'react-awesome-reveal';
const AliThemeSection = () => {
    return (
        <div>
            <div className="py-20 ">
                <h1 className="lg:text-5xl text-4xl font-bold  text-center mb-4 lg:px-72 md:px-16">Universal Solutions: Empowering Everyone</h1>
                <p className=" text-center text-xl lg:px-32 md:px-10">Our inclusive platform caters to every user, embracing diversity, and delivering excellence across the board. Whether your personal project,nonprofit organisation, small business or large enterprise, our tailored solutions cater to your unique needs.</p>
            </div>
            <div className="grid  lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 lg:mx-40 mx-10 pb-4">
                <Fade duration={1000}>
                    <div className="card lg:w-80 md:w-60 bg-base-100 shadow-xl">
                        <figure className="px-10 bg-base-300">
                            <img src={Allfixer} alt="Shoes" className="p-10" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">AllFixer</h2>
                            <h1>Productivity</h1>
                            <p>Aliquam a augue luctus neque purus ipsum neque dolor primis </p>
                            <div className='flex justify-between'>

                                <a href="">
                                    <u className='text-slate-500 '>
                                        <span className='flex mr-4'>
                                            <AiFillApple className='text-slate-500 mt-1 text-xl'></AiFillApple>
                                            <h1 className='text-slate-500 text-xl'>IOS</h1>
                                        </span>
                                    </u>
                                </a>
                                <a href="">
                                    <u className='text-slate-500 '><span className='flex'>
                                        <AiFillAndroid className='mt-1 text-xl text-slate-500'></AiFillAndroid>
                                        <h1 className='text-slate-500 text-xl '>Android</h1>
                                    </span></u>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade delay={500} duration={1000}>
                    <div className="card lg:w-80 md:w-60 bg-base-100 shadow-xl">
                        <figure className="px-10 bg-base-300">
                            <img src={AppSet} alt="Shoes" className="p-10" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">AppSet</h2>
                            <h1>Social Network</h1>
                            <p>Aliquam a augue luctus neque purus ipsum neque dolor primis </p>
                            <div className='flex justify-between'>

                                <a href="">
                                    <u className='text-slate-500 '>
                                        <span className='flex mr-4'>
                                            <AiFillApple className='text-slate-500 mt-1 text-xl'></AiFillApple>
                                            <h1 className='text-slate-500 text-xl'>IOS</h1>
                                        </span>
                                    </u>
                                </a>
                                <a href="">
                                    <u className='text-slate-500 '><span className='flex'>
                                        <AiFillAndroid className='mt-1 text-xl text-slate-500'></AiFillAndroid>
                                        <h1 className='text-slate-500 text-xl '>Android</h1>
                                    </span></u>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade delay={1000} duration={1000}>
                    <div className="card lg:w-80 md:w-60 bg-base-100 shadow-xl">
                        <figure className="px-10  bg-base-300">
                            <img src={Mobicom} alt="Shoes" className="p-10" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">MobiCom</h2>
                            <h1>Finance</h1>
                            <p>Aliquam a augue luctus neque purus ipsum neque dolor primis </p>
                            <div className='flex justify-between'>

                                <a href="">
                                    <u className='text-slate-500 '>
                                        <span className='flex mr-4'>
                                            <AiFillApple className='text-slate-500 mt-1 text-xl'></AiFillApple>
                                            <h1 className='text-slate-500 text-xl'>IOS</h1>
                                        </span>
                                    </u>
                                </a>
                                <a href="">
                                    <u className='text-slate-500 '><span className='flex'>
                                        <AiFillAndroid className='mt-1 text-xl text-slate-500'></AiFillAndroid>
                                        <h1 className='text-slate-500 text-xl '>Android</h1>
                                    </span></u>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default AliThemeSection;