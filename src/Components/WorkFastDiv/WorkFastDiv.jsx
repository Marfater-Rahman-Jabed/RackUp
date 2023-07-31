import { BsDot } from 'react-icons/bs';
import Logo2 from '../../assets/Hero-image02.png'
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
// import { useRef } from 'react';
const WorkFastDiv = () => {
    // const sectionRef = useRef(null);

    return (
        <div className='lg:flex md:flex mt-16'>

            <div className='lg:w-1/2 lg:flex lg:justify-end'>
                <Fade delay={700} >
                    <img src={Logo2} alt="" className='lg:w-[40vw] md:w-[40vw] lg:h-[70vh] md:h-[35vh]' />
                </Fade>
            </div>

            <div className='lg:w-1/2 md:w-1/2 ms-2 mt-2'>
                <h1 className='text-slate-300 font-bold'>FULLY CUSTOMIZABLE</h1>
                <br />
                <h1 className='text-5xl font-bold'>Work faster with <br /> powerful tools</h1><br />
                <h1 className='text-justify flex items-center mb-2'> <BsDot className='text-2xl'></BsDot> Boost Customer Experience with Cutting-Edge Tools,</h1>
                <h1 className='text-justify flex items-center mb-2'><BsDot className='text-2xl'></BsDot> Real-Time Engagement</h1>
                <h1 className='text-justify flex items-center mb-2'><BsDot className='text-2xl'></BsDot>Data-Driven Decisions</h1>
                <h1 className='text-justify flex items-center mb-2'>
                    <BsDot className='text-2xl'></BsDot>Optimize inventory </h1>
                <h1 className='text-justify flex items-center mb-2'>
                    <BsDot className='text-2xl'></BsDot>Grow smarter with powerful insights </h1>


                <Link to='/makeDiv'>
                    <button className='btn btn-outline rounded-full btn-sm mt-6 ms-4' >Learn more about it</button>
                </Link>

            </div>
        </div>
    );
};

export default WorkFastDiv;