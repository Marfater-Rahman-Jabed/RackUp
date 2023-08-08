import HeroImage from '../../assets/Hero-image01.png'
import { BiLogoPlayStore } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
import './HeroSection.css'
import { Fade } from 'react-awesome-reveal';
const HeroSection = () => {
    const handlerightClick = (e) => {
        e.preventDefault()
    }
    return (
        <div className='shadow-2xl'>
            <div className='lg:flex md:flex lg:flex-row md:flex-row flex-col items-center bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 lg:py-10 py-16 '>
                <div className='visible lg:invisible md:invisible lg:w-0 md:w-0 w-full lg:0 md:h-0   me-16 '>
                    <Fade direction='left' duration={3000}>
                        <img src={HeroImage} alt="" onContextMenu={handlerightClick} className='lg:w-[40vw] lg:h-[85vh] md:h-[50vh]' />
                    </Fade>
                </div>

                <div className=' lg:w-[45vw] md:w-[40vw] w-[90vw] mx-auto flex flex-col  justify-center items-center text-white text-justify'>
                    <Fade direction='up' duration={3000}>
                        <h1 className='lg:text-6xl text-4xl font-bold text-center'>Blend Your Dream
                            <br />Businesses Online </h1> <br />
                        <h1 className='font-semibold font-sans lg:text-justify lg:ms-16 text-center'>Increase brand visibility on customer&apos;s  phones!. Seamlessly integrate your physical stores with our app/web service. Enhance the shopping experience!</h1>
                        <span className='flex pt-6'>
                            <button className='btn btn-outline text-white'><BsPhone className='text-xl'></BsPhone>Available on <br /> AppStore</button>
                            <button className='btn btn-outline mx-4 text-white'><BiLogoPlayStore className='text-xl'></BiLogoPlayStore>Google Play</button></span>
                        <h1 className='pt-5'>* Available on iPhone, iPad and all Android devices from 5.5</h1>
                    </Fade>
                </div>
                <div className='lg:w-[40vw] md:w-[40vw] w-0 h-0 lg:h-full md:h-[50vh] lg:visible md:visible invisible  me-16 '>
                    <Fade direction='left' duration={3000}>
                        <img src={HeroImage} alt="" onContextMenu={handlerightClick} className='lg:w-[40vw] lg:h-[85vh] md:h-[50vh]' />
                    </Fade>
                </div>


            </div>
        </div>
    );
};

export default HeroSection;