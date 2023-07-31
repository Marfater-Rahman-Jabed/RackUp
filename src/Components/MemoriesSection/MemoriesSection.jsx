import logoRegister from '../../assets/Hero-image-06.png'
import Customize from '../../assets/Customize.png'
import Connect from '../../assets/Connect.png'
import { Link } from 'react-router-dom';

const MemoriesSection = () => {
    return (
        <div className="bg-slate-800  ">
            <div className='pt-28 lg:px-72 md:px-32'>
                <h1 className="lg:text-5xl text-3xl text-center mb-5 font-bold text-white">Unleash Your Imagination: Dream, Innovate, Create</h1>
                <p className="text-center text-white ">
                    Boundless creativity, soaring dreams. Symphony of inspiration births remarkable ideas, crafting an enduring legacy echoing through time and space.
                </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 mt-24 lg:ms-28 md:ms-4 px-28'>
                <div >
                    <span className="rounded-full bg-slate-700 flex justify-center items-center w-40 h-40 ">
                        <img src={logoRegister} alt="" className='   w-24 h-24' />
                    </span>
                    <h1 className='text-white ms-12 mt-2 font-semibold text-xl'>Register</h1>
                </div>
                <div >
                    <span className="rounded-full bg-slate-700 flex justify-center items-center w-40 h-40 ">
                        <img src={Customize} alt="" className='   w-24 h-24' />
                    </span>
                    <h1 className='text-white ms-12 mt-2 font-semibold text-xl'>Customize</h1>
                </div>
                <div >
                    <span className="rounded-full bg-slate-700 flex justify-center items-center w-40 h-40 ">
                        <img src={Connect} alt="" className='   w-24 h-24' />
                    </span>
                    <h1 className='text-white ms-12 mt-2 font-semibold text-xl'>Connect</h1>
                </div>

            </div>
            <div className='text-center'>
                <Link to='/pricing' className='btn bg-green-500 mt-16 px-10 rounded-full font-bold text-white hover:bg-slate-700 mb-16'>Learn more About it</Link>
            </div>
        </div>
    );
};

export default MemoriesSection;