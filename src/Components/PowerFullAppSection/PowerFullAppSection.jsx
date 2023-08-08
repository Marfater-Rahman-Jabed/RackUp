// import { Fade } from "react-awesome-reveal";
import '../HeroSection/HeroSection.css'
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const PowerFullAppSection = () => {
    return (
        <div className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 lg:pt-32 pt-24 pb-16 bgCss shadow-2xl">
            <div className="lg:mx-64 px-2">
                <div className="mb-12">
                    <h1 className="lg:text-5xl text-4xl font-bold text-white text-center mb-4">More Faster, More Powerful App</h1>
                    <p className="text-white text-center text-xl">Experience the thrill of a faster, more powerful app that sets new standards for seamless performance and user satisfaction.</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 text-center lg:ms-16 ms-6">

                    <div className="lg:w-40 mb-6">
                        <h1 className="lg:text-7xl text-5xl font-bold text-white">

                            <CountUp end={85} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <ReactVisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </ReactVisibilitySensor>
                                )}
                            </CountUp>%
                        </h1>
                        <p className="text-xl font-semibold text-white">Faster Access</p>
                    </div>



                    <div className="lg:w-40 mb-6">
                        <h1 className="lg:text-7xl text-5xl font-bold text-white">

                            <CountUp end={96} redraw={true} delay={0.4}>
                                {({ countUpRef, start }) => (
                                    <ReactVisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </ReactVisibilitySensor>
                                )}
                            </CountUp>%
                        </h1>
                        <p className="text-xl font-semibold text-white">App Productivity</p>
                    </div>

                    <div className="lg:w-40 mb-6">
                        <h1 className="lg:text-7xl text-5xl font-bold text-white">

                            <CountUp end={75} redraw={true} delay={0.6}>
                                {({ countUpRef, start }) => (
                                    <ReactVisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </ReactVisibilitySensor>
                                )}
                            </CountUp>%
                        </h1>
                        <p className="text-xl font-semibold text-white">Battery Saving</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PowerFullAppSection;