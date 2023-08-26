
const SubscribeSection = () => {
    return (
        <div className="bg-white pb-10  dark:bg-slate-600 dark:text-white">
            <div className="pt-20">
                <h1 className="text-center">GRAB RackUp FOR THE BEST PRICE TODAY</h1>
            </div>
            <div className="py-8">
                <h1 className="lg:text-5xl text-4xl font-bold  text-center mb-4">Subscribe For Updates</h1>
                <p className=" text-center text-xl">Subscribe to our newsletter now and our <br /> delivery owl will bring you our best deals, ideas and news about RackUp App</p>
            </div>
            <div className="lg:w-1/2 w-10/12 mx-auto">
                <form className="">
                    <input type="text" placeholder="Enter Your Email Address" className="input input-bordered input-accent w-full mb-6 h-16" /><br />
                    <input type="submit" value="Sign Up" className="input input-bordered bg-green-500 w-full text-white font-bold text-xl mb-6 h-16" />
                </form>
            </div>
            <h1 className="text-center mb-20">14-day free trial and no credit card required.</h1>
        </div>
    );
};

export default SubscribeSection;