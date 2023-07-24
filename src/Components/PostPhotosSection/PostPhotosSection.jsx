import { BsDot } from 'react-icons/bs';
import Logo3 from '../../assets/Hero-image-03.png'
import { Fade } from 'react-awesome-reveal';
const PostPhotosSection = () => {
    return (
        <div className='lg:flex md:flex mt-16 bg-slate-800 pt-20 pb-10 lg:ps-16'>
            <div className='lg:w-1/2 lg:flex lg:justify-end'>
                <Fade direction='left' duration={3000}>
                    <img src={Logo3} alt="" className='lg:w-[40vw]  lg:h-[70vh]' />
                </Fade>
            </div>
            <div className='lg:w-1/2 ms-4 me-4 mt-2'>
                <Fade direction='up'>
                    <h1 className='text-slate-300 font-bold'>EASILY SHARE LISTS</h1>
                    <br />
                    <h1 className='lg:text-5xl text-4xl font-bold text-white'>Post your photos  <br /> anywhere anytime</h1><br />
                    <h1 className='text-justify flex items-center mb-2 text-white'> <BsDot className='text-2xl'></BsDot> Vitae auctor integer congue magna at pretium</h1>
                    <h1 className='text-justify flex items-center mb-2 text-white'><BsDot className='text-2xl'></BsDot> Integer congue magna at pretium purus pretium ligula rutrum <br /> luctus risus eros dolor auctor ipsum blandit purus</h1>
                    <h1 className='text-justify flex items-center mb-2 text-white'><BsDot className='text-2xl'></BsDot>Sagittis congue augue egestas volutpat egestas magna</h1>
                    <h1 className='text-justify flex items-center mb-2 text-white'>
                        <BsDot className='text-2xl'></BsDot> Egestas magna ipsum vitae purus efficitur ipsum cubilia and <br /> laoreet pretium ligula rutrum luctus</h1>


                </Fade>

            </div>
        </div>
    );
};

export default PostPhotosSection;