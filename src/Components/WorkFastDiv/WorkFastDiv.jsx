import { BsDot } from 'react-icons/bs';
import Logo2 from '../../assets/Hero-image02.png'
const WorkFastDiv = () => {
    return (
        <div className='lg:flex mt-16'>
            <div className='lg:w-1/2 lg:flex lg:justify-end'>
                <img src={Logo2} alt="" className='lg:w-[40vw] lg:h-[70vh]' />
            </div>
            <div className='lg:w-1/2 ms-2 mt-2'>
                <h1 className='text-slate-300 font-bold'>FULLY CUSTOMIZABLE</h1>
                <br />
                <h1 className='text-5xl font-bold'>Work faster with <br /> powerful tools</h1><br />
                <h1 className='text-justify flex items-center mb-2'> <BsDot className='text-2xl'></BsDot> Vitae auctor integer congue magna at pretium</h1>
                <h1 className='text-justify flex items-center mb-2'><BsDot className='text-2xl'></BsDot> Integer congue magna at pretium purus pretium ligula rutrum <br /> luctus risus eros dolor auctor ipsum blandit purus</h1>
                <h1 className='text-justify flex items-center mb-2'><BsDot className='text-2xl'></BsDot>Sagittis congue augue egestas volutpat egestas magna</h1>
                <h1 className='text-justify flex items-center mb-2'>
                    <BsDot className='text-2xl'></BsDot> Egestas magna ipsum vitae purus efficitur ipsum cubilia and <br /> laoreet pretium ligula rutrum luctus</h1>


                <button className='btn btn-outline rounded-full btn-sm mt-6 ms-4'>Learn more about it</button>

            </div>
        </div>
    );
};

export default WorkFastDiv;