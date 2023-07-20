import HeroImage from '../../assets/Hero-image01.png'
import { BiLogoPlayStore } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
const HeroSection = () => {
    return (
        <div className='flex items-center bg-purple-700 py-10'>
            <div className='w-1/2 flex flex-col justify-center items-center text-white text-justify'>
                <h1 className='text-5xl font-bold'>Turn your photos <br /> into works of art</h1> <br />
                <h1 className='font-semibold font-sans '>Feugiat primis ligula risus auctor laoreet augue egestas <br /> and mauris viverra tortor in iaculis pretium magna undo <br /> ipsum mauris in placerat feugiat primis ultrice</h1>
                <span className='flex mt-6'>
                    <button className='btn btn-outline text-white'><BsPhone className='text-xl'></BsPhone>Available on <br /> AppStore</button>
                    <button className='btn btn-outline mx-4 text-white'><BiLogoPlayStore className='text-xl'></BiLogoPlayStore>Google Play</button></span>
                <h1 className='mt-5'>* Available on iPhone, iPad and all Android devices from 5.5</h1>
            </div>
            <div className='w-1/2 me-8'>
                <img src={HeroImage} alt="" className='w-[40vw] h-[85vh]' />
            </div>
        </div>
    );
};

export default HeroSection;