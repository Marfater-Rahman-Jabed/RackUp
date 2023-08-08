import { BsDot } from 'react-icons/bs';
import Logo3 from '../../assets/Hero-image-03.png'
import { Fade } from 'react-awesome-reveal';
const PostPhotosSection = () => {
    return (
        <div className='lg:flex md:flex pt-16 bg-slate-800 pt-20 pb-10 lg:ps-16 shadow-2xl'>
            <div className='lg:w-1/2 lg:flex lg:justify-end'>
                <Fade direction='left' duration={3000}>
                    <img src={Logo3} alt="" className='lg:w-[40vw]  lg:h-[70vh]' />
                </Fade>
            </div>
            <div className='lg:w-1/2 ms-4 me-4 pt-2'>
                <Fade direction='up'>
                    <h1 className='text-slate-300 font-bold'>Easily Organize Effortlessly</h1>
                    <br />
                    <h1 className='lg:text-5xl text-4xl font-bold text-white'>Unleash the Power   <br /> of Automated Workflows</h1><br />
                    <h1 className='text-justify flex items-center mb-2 text-white'> <BsDot className='text-2xl'></BsDot> Embrace Automation&apos;s Efficiency: Soar to New Heights</h1>
                    <h1 className='text-justify flex items-center mb-2 text-white'><BsDot className='text-2xl'></BsDot> Swift, Effective Task Completion - Our Powerful Toolkit Delights.</h1>
                    <h1 className='text-justify flex items-center mb-2 text-white'><BsDot className='text-2xl'></BsDot>Empower Your Work, Achieve with Might,</h1>
                    <h1 className='text-justify flex items-center mb-2 text-white'>
                        <BsDot className='text-2xl'></BsDot> Harness the Power, Make Your Workflow Take Flight</h1>


                </Fade>

            </div>
        </div>
    );
};

export default PostPhotosSection;