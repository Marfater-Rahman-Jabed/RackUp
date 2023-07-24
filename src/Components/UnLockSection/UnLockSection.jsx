import { Fade } from 'react-awesome-reveal';
import bike from '../../assets/Bike.png'
import helikopter from '../../assets/helikopter.png'
const UnLockSection = () => {
    return (
        <div className='mb-20'>
            <div className='pt-28'>
                <h1 className="lg:text-5xl text-3xl text-center mb-5 font-bold ">Unlock Full Power Of The NextApp</h1>
                <p className="text-center text-slate-500 text-xl">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero <br /> tempus, blandit posuere ligula varius magna congue cursus porta
                </p>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 lg:mx-72 mx-4 mt-16'>
                <Fade direction='right' delay={500} duration={3000}>
                    <div className='border-4 border-slate-100 rounded-lg p-12 shadow-lg'>
                        <img src={bike} alt="" className='w-32 mx-16 items-center' />
                        <h1 className='text-center text-2xl font-bold my-4'><span className='text-slate-500'>NextApp</span> Free</h1>
                        <h1 className='text-center text-2xl mb-8'><b className='text-5xl font-bold'>$0</b>/mo</h1>
                        <h1 className='text-center text-xl mb-4'>20 Users Tasks</h1>
                        <h1 className='text-center text-xl mb-4'>5 GB of Storage</h1>
                        <h1 className='text-center text-xl mb-4 text-slate-400'>Theme Customization</h1>
                        <h1 className='text-center text-xl mb-4 text-slate-400'>Free Email Support</h1>
                        <h1 className='text-center text-xl mb-4 text-slate-400'>Security Suite</h1>

                        <div className='text-center'>
                            <button className='btn btn-outline px-20 rounded-full'>Get Started</button>
                        </div>

                    </div>
                </Fade>
                <Fade direction='left' delay={500} duration={3000}>
                    <div className='border-4 border-slate-100 rounded-lg p-12 shadow-lg'>
                        <img src={helikopter} alt="" className='w-32 mx-16 items-center' />
                        <h1 className='text-center text-2xl font-bold my-4'><span className='text-slate-500'>NextApp</span>  Pro</h1>
                        <h1 className='text-center text-2xl mb-8'><b className='text-5xl font-bold'>$2.39</b>/mo</h1>
                        <h1 className='text-center text-xl mb-4'>Unlimited Tasks</h1>
                        <h1 className='text-center text-xl mb-4'>10 GB of Storage</h1>
                        <h1 className='text-center text-xl mb-4 '>Theme Customization</h1>
                        <h1 className='text-center text-xl mb-4 '>Free Email Support</h1>
                        <h1 className='text-center text-xl mb-4 '>Security Suite</h1>

                        <div className='text-center'>
                            <button className='btn btn-outline px-16 bg-green-400 rounded-full'>Upgrade to pro</button>
                        </div>

                    </div>
                </Fade>
            </div>
            <h1 className='text-xl text-center mt-10'><b>Note</b>! Prices may vary from location to location due to local taxation laws <br /> and conversion rates from U.S. Dollars.</h1>
        </div>
    );
};

export default UnLockSection;