import { IoIosOptions } from 'react-icons/io';
import { PiNotificationBold } from 'react-icons/pi';
import { RiDoorLockFill } from 'react-icons/ri';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import image4 from '../../assets/Hero-image-04.png'
const BeautySection = () => {
    return (
        <div className='lg:flex  bg-base-200 lg:py-28 py-16'>
            <div className=' lg:w-[40vw] w-[90vw] mx-auto lg:mt-20 mt-12 mb-5'>
                <h1 className='text-slate-300 font-bold'>BEAUTY OF SIMPLICITY</h1>
                <br />
                <h1 className='lg:text-5xl text-4xl font-bold mb-4'>Elegant intuitive <br /> user interface</h1>
                <h1 className='font-semibold font-sans lg:text-justify text-center'>An enim nullam tempor sapien gravida donec an ipsum pretium porta justo integer at odio velna vitae auctor integer and congue magna at purus pretium ligula rutrum luctus ultrice undo gravida lectus suscipit gestas magna suscipit luctus undo</h1>
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 mt-12 lg:ms-0 ms-12'>
                    <div className=''><IoIosOptions className='text-7xl text-slate-600'></IoIosOptions> PowerFull <br /> Option</div>
                    <div><PiNotificationBold className='text-7xl text-slate-600'></PiNotificationBold>Smart <br /> Notification</div>
                    <div><RiDoorLockFill className='text-7xl text-slate-600'></RiDoorLockFill>Concrete <br /> Security</div>
                    <div><MdOutlinePrivacyTip className='text-7xl text-slate-600'></MdOutlinePrivacyTip>Unlimited <br /> Access</div>
                </div>

            </div>
            <div className='lg:w-[40vw] lg:h-full  lg:me-8  px-2 '>
                <img src={image4} alt="" className='lg:w-[28vw] w-[90vw] lg:h-[100vh] h-[70vh] mt-2' />
            </div>
        </div>
    );
};

export default BeautySection;