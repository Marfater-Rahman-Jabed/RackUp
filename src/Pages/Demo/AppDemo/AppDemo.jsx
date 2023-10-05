import { useEffect } from "react";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
// import ReactPlayer from 'react-player'
// import { PiVideoLight } from 'react-icons/pi'
// // import { AiOutlinePlayCircle } from 'react-icons/ai'
// import { useState } from "react";
// import { Fade } from "react-awesome-reveal";
// import { useRef } from "react";
// import './AppDemo.css'
const AppDemo = () => {
    // const totalVideos = [
    //     {
    //         _id: '01',
    //         src: 'https://youtu.be/fnWLcyXTISc?si=sr3U_oqa4OGGhQNr',
    //         title: 'ABCDE',

    //     },
    //     {
    //         _id: '02',
    //         src: 'https://youtu.be/rMebArjihi8?si=enuFKs88myBi0mSL',
    //         title: 'FGHIJ'
    //     },
    //     {
    //         _id: '03',
    //         src: 'https://youtu.be/7UbpNPb255k?si=IYiMAG_M8E4_9F5e',
    //         title: 'KLMNOdfdsvfdgbfbdvfdvdskjsdjkjcvifdhvjcvjfvfoddsdlvvnsdfekjbnfmnckvjfdvncx nfdkjvndksjvjids'
    //     },
    //     {
    //         _id: '04',
    //         src: 'https://youtube.com/shorts/zKr31xFo1Ig?feature=share',
    //         title: 'PQRST'
    //     },
    //     {
    //         _id: '05',
    //         src: 'https://youtu.be/fnWLcyXTISc?si=sr3U_oqa4OGGhQNr',
    //         title: 'UVWXY'
    //     },
    //     {
    //         _id: '06',
    //         src: 'https://youtu.be/fnWLcyXTISc?si=sr3U_oqa4OGGhQNr',
    //         title: 'ZABCD'
    //     },
    // ]
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // const [value, setValue] = useState(false)
    // const [url, setUrl] = useState([])
    // const handleVideo = (ids, src) => {

    //     // console.log(ids)
    //     window.my_modal_5.showModal()
    //     setUrl(src)
    //     // setTitle(title)
    //     setValue(true)
    // }
    // const handleRightClick = (e) => {
    //     e.preventDefault();
    // }
    // const playerRef = useRef(null);
    return (
        <div className="dark:bg-slate-600 pb-16">
            <Helmet>
                <meta charSet="utf-8" />
                <title>RackUp-Blog</title>
                <link rel="canonical" href="/appdemo" />
                <meta name="description" content="RackUp Blog Page" />
                <meta name="keywords" content="Rackup,android,website,webpage,blog" />
            </Helmet>
            <div className='flex justify-center items-center h-full py-36 '>
                <div className='flex justify-center items-center h-full'>
                    <p className='text-7xl font-bold dark:text-white'>C</p>
                    <p className='w-10 h-10 border-8 rounded-full animate-spin border-dashed mt-6 border-purple-700 dark:border-yellow-400'> </p>
                    <p className='text-7xl font-bold dark:text-white'>mingS</p>
                    <p className='w-10 h-10 border-8 rounded-full animate-spin border-dashed mt-6 border-purple-700 dark:border-yellow-400  mx-1'> </p>
                    <p className='w-10 h-10 border-8 rounded-full animate-spin border-dashed mt-6 border-purple-700 dark:border-yellow-400'> </p>
                    <p className='text-7xl font-bold dark:text-white'>n</p>
                    <p className='border-4 mt-10 border-purple-700 dark:border-yellow-400 border-dotted  animate-pulse mx-1'></p>
                    <p className='border-4 mt-10 border-purple-700 dark:border-yellow-400 border-dotted  animate-pulse mx-1'></p>
                    <p className='border-4 mt-10 border-purple-700 dark:border-yellow-400  border-dotted  animate-pulse mx-1'></p>
                    <p className='border-4 mt-10 border-purple-700 dark:border-yellow-400 border-dotted  animate-pulse mx-1'></p>

                </div>

            </div>
            {/* <div className="p-4 bg-white dark:bg-slate-600 dark:text-white">
                <h1><span className="text-sky-400 mr-3 lg:ms-12 text-xl font-semibold"><Link to='/'><u>Home</u></Link></span>&gt;&gt;<span className="text-slate-500 dark:text-white text-xl mx-3 font-semibold">App Demo</span></h1>
            </div>
            <div className='py-20  '>
                <h1 className="lg:text-5xl text-3xl text-center mb-5 font-bold  dark:text-white">Get Idea About Our APP&apos;S Experience .</h1>
                <p className="text-center text-xl text-slate-400 dark:text-white lg:px-28 md:px-24 px-4">
                    Our Some demo product is presented here which is delevered already to the client. You can get idea from here about our company. Explore all the demo specificly.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:px-16">
                {totalVideos?.map((vidoe, i) =>
                    <Fade key={i} duration={2000}>
                        <div className=' bg-purple-300 shadow-lg rounded-lg'>
                            <button onClick={() => handleVideo(vidoe._id, vidoe.src, vidoe.title)} title={vidoe?.title}> <span >
                                <img src={vidoe?.picture ? vidoe?.picture : `https://i.ibb.co/r2d5Yg3/linkpre.jpg`} onContextMenu={handleRightClick} alt="" className='w-[100vw] h-60 rounded-t-lg' />
                            </span>
                                <span className='' title={vidoe?.title}>
                                    <h1 className='text-xl font-semibold flex ms-4 mt-2'><PiVideoLight className='text-4xl  me-2 hover:animate-pulse'></PiVideoLight>{vidoe?.title ? `${vidoe?.title.slice(0, 15)}...` : 'Latest Video'}</h1>
                                </span>
                            </button>

                        </div>
                    </Fade>
                )
                }
            </div>
            <dialog id="my_modal_5" className="modal">
                <form method="dialog" className="modal-box p-6 lg:h-[75vh] md:h-[50vh] h-[50vh]  w-[100vw]  bg-black">
                    <button className="btn btn-md  btn-circle bg-red-500 absolute right-4 lg:top-4 md:top-4 top-4 text-2xl" onClick={() => { setValue(false); setUrl(null) }}>✕</button>

                    <div className=' w-full lg:mt-12 md:mt-12 mt-12 rounded-full lg:h-5/6 md:h-5/6 h-5/6'>
                        <ReactPlayer url={url} controls playing={value} width='100%'
                            height='100%'

                        />
                    </div>
                </form>

            </dialog> */}
        </div >
    );
};

export default AppDemo;