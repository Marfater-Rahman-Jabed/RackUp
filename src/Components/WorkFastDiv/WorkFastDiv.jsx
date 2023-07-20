import { BsDot } from 'react-icons/bs';
import Logo2 from '../../assets/Hero-image02.png'
const WorkFastDiv = () => {
    return (
        <div className='flex mt-16'>
            <div className='w-1/2 flex justify-end'>
                <img src={Logo2} alt="" className='w-[40vw] h-[70vh]' />
            </div>
            <div className='w-1/2'>
                <h1 className='text-slate-300 font-bold'>FULLY CUSTOMIZABLE</h1>
                <br />
                <h1 className='text-5xl font-bold'>Work faster with <br /> powerful tools</h1><br />
                <h1 className='text-justify flex items-center mb-2'> <BsDot></BsDot> Vitae auctor integer congue magna at pretium</h1>
                <h1 className='text-justify flex items-center mb-2'><BsDot></BsDot> Integer congue magna at pretium purus pretium ligula rutrum <br /> luctus risus eros dolor auctor ipsum blandit purus</h1>
                <h1 className='text-justify flex items-center mb-2'><BsDot></BsDot>Sagittis congue augue egestas volutpat egestas magna</h1>
                <h1 className='text-justify flex items-center mb-2'>
                    <BsDot></BsDot> Egestas magna ipsum vitae purus efficitur ipsum cubilia and <br /> laoreet pretium ligula rutrum luctus</h1>


                <button className='btn btn-outline rounded-full btn-sm mt-6 ms-4'>Learn more about it</button>

            </div>
        </div>
    );
};

export default WorkFastDiv;