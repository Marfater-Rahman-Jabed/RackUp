import HeroImage from '../../assets/Hero-image01.png'
import { BiLogoPlayStore } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
import './HeroSection.css'
import { Fade } from 'react-awesome-reveal';
const HeroSection = () => {
    return (
        <div>
            <div className='lg:flex md:flex items-center bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 lg:py-10 py-16 bgCss'>

                <div className=' lg:w-[40vw] md:w-[40vw] w-[90vw] mx-auto flex flex-col justify-center items-center text-white text-justify'>
                    <Fade direction='up' duration={3000}>
                        <h1 className='lg:text-5xl text-4xl font-bold text-center'>Turn your photos  <br />into works of art</h1> <br />
                        <h1 className='font-semibold font-sans lg:text-justify lg:ms-20 text-center'>Feugiat primis ligula risus auctor laoreet augue egestas  and mauris viverra tortor in iaculis pretium magna undo  ipsum mauris in placerat feugiat primis ultrice</h1>
                        <span className='flex mt-6'>
                            <button className='btn btn-outline text-white'><BsPhone className='text-xl'></BsPhone>Available on <br /> AppStore</button>
                            <button className='btn btn-outline mx-4 text-white'><BiLogoPlayStore className='text-xl'></BiLogoPlayStore>Google Play</button></span>
                        <h1 className='mt-5'>* Available on iPhone, iPad and all Android devices from 5.5</h1>
                    </Fade>
                </div>


                <div className='lg:w-[40vw] md:w-[40vw] lg:h-full md:h-[50vh] h-0  me-16 lg:visible md:visible invisible '>
                    <Fade direction='left' duration={3000}>
                        <img src={HeroImage} alt="" className='w-[40vw] lg:h-[85vh] md:h-[50vh]' />
                    </Fade>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;