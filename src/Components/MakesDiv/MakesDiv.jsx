import { TbHandClick } from 'react-icons/tb';
import { IoIosOptions } from 'react-icons/io';
import { CiImageOn } from 'react-icons/ci';
import { BiNotification } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GoSync } from 'react-icons/go';
const MakesDiv = () => {
    return (
        <div className='bg-base-200 pb-16'>
            <div className="text-center pt-20 mb-16">
                <h1 className="lg:text-5xl text-3xl font-bold lg:mb-8 mb-4">What Makes NextApp Different</h1>
                <p className='text-xl text-slate-400'>
                    Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero <br /> tempus, blandit posuere ligula varius magna congue cursus porta
                </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-2 lg:px-20 px-2'>

                <div className='lg:w-80 w-96 flex  mb-4'>
                    <span>
                        <TbHandClick className='text-5xl mt-1 text-slate-600 mr-3'></TbHandClick>
                    </span>
                    <span>
                        <h1 className='text-xl font-bold mb-2'>
                            Friendly Interface
                        </h1>
                        <p>
                            Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit felis magna dolor vitae
                        </p>
                    </span>
                </div>
                <div className='lg:w-80 w-96 flex  mb-4'>
                    <span>
                        <IoIosOptions className='text-5xl mt-1 text-slate-600 mr-3'></IoIosOptions>
                    </span>
                    <span>
                        <h1 className='text-xl font-bold mb-2'>
                            Powerful Options
                        </h1>
                        <p>
                            Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit felis magna dolor vitae
                        </p>
                    </span>
                </div>
                <div className='lg:w-80 w-96 flex  mb-4'>
                    <span>
                        <CiImageOn className='text-5xl mt-1 text-slate-600 mr-3'></CiImageOn>

                    </span>
                    <span>
                        <h1 className='text-xl font-bold mb-2'>
                            Image Effects
                        </h1>
                        <p>
                            Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit felis magna dolor vitae
                        </p>
                    </span>
                </div>
                <div className='lg:w-80 w-96 flex  mb-4'>
                    <span>
                        <BiNotification className='text-5xl mt-1 text-slate-600 mr-3'></BiNotification>
                    </span>
                    <span>
                        <h1 className='text-xl font-bold mb-2'>
                            Instant Notifications
                        </h1>
                        <p>
                            Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit felis magna dolor vitae
                        </p>
                    </span>
                </div>



                <div className='lg:w-80 w-96 flex  mb-4'>
                    <span>

                        <HiOutlineLocationMarker className='text-5xl mt-1 text-slate-600 mr-3'></HiOutlineLocationMarker>
                    </span>
                    <span>
                        <h1 className='text-xl font-bold mb-2'>
                            Real-Time Location
                        </h1>
                        <p>
                            Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit felis magna dolor vitae
                        </p>
                    </span>
                </div>



                <div className='lg:w-80 w-96 flex  mb-4'>
                    <span>
                        <GoSync className='text-5xl mt-1 text-slate-600 mr-3'></GoSync>

                    </span>
                    <span>
                        <h1 className='text-xl font-bold mb-2'>
                            Super Fast Sync
                        </h1>
                        <p>
                            Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit felis magna dolor vitae
                        </p>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default MakesDiv;