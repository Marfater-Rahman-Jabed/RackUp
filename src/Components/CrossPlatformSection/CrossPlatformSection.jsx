import Logo5 from '../../assets/Hero-image-05.png'
const CrossPlatformSection = () => {
    return (
        <div className='bg-base-200 pb-20'>
            <div className='py-20 '>
                <h1 className="lg:text-5xl text-4xl text-center font-bold mb-6">NextApp Is Cross-Platform App</h1>
                <p className="text-center text-slate-500 text-xl">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero <br /> tempus, blandit posuere ligula varius magna congue cursus porta
                </p>
            </div>
            <div>
                <img src={Logo5} alt="" className=' ' />
            </div>
        </div>
    );
};

export default CrossPlatformSection;