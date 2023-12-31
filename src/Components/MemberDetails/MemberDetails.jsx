// import { HiOutlineMail } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
// import { BsLinkedin } from 'react-icons/bs';
import ReactWhatsapp from 'react-whatsapp';
import './MemberDetails.css'
// import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
const MemberDetails = () => {
    // const handlecard = (txt) => {
    //     const mailtoLink = `mailto:${txt}`;

    //     // Open the user's default email client
    //     window.location.href = mailtoLink;
    // }
    return (
        <div className=" bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700  py-24 " style={{ backgroundImage: "linear-gradient(180deg, purple 1px, 1px)", backgroundSize: "3px 3px" }}>
            <div className='pb-28 '>
                <h1 className="lg:text-5xl text-4xl text-center font-bold mb-6 text-white">Our Team</h1>
                <p className=" lg:text-center md:text-center text-justify  text-white text-xl md:px-20 lg:px-64 px-4">
                    Discover the people behind RackUp IT, the Ultimate  Solution  for your IT needs. Our team is more than just a group of professionals, we are a family.
                </p>
            </div>
            {/* <a href="https://www.linkedin.com/in/marfater-rahman-jabed-17541b244/" target='__blank' className='text-white'><BsLinkedin></BsLinkedin></a> */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-24 lg:px-16 md:px-1 gap-2'>
                <div className="cards dark:bg-black dark:text-white">
                    <div className="imgbox">
                        <img
                            src="https://i.ibb.co/Y2dFfy2/sayem-2.jpg"
                            className='imgs h-40 w-40'
                        />
                        <div className='flex  items-center justify-end -mt-16 gap-1 '>
                            <a href="mailto:sayemmuhaimin@gmail.com"><AiOutlineMail className='text-3xl' ></AiOutlineMail></a>
                            <a href="https://www.linkedin.com/in/md-sayem-muhaimin-803a00228" target='__blank'><AiFillLinkedin className='text-3xl'></AiFillLinkedin></a>
                            <a href="https://github.com/Sayem0780" target='__blank'><AiFillGithub className='text-3xl'></AiFillGithub></a>
                            <ReactWhatsapp number="+8801537167147" message="Hi!!!" ><AiOutlineWhatsApp className='text-3xl'></AiOutlineWhatsApp></ReactWhatsapp>
                        </div>
                        <h1 className='text-center mt-10 text-2xl font-bold'>MD. Sayem Mohaimin</h1>
                    </div>

                    <div className="content">
                        <h2 className=' font-bold text-xl'>Mobile Application Engineer</h2>

                        <p className='text-center mt-2 font-serif'>Mobile Application Enthusiasts. <br /> Build Native and cross Android, IOS Apps . </p>



                    </div>
                </div>
                <div className="cards dark:bg-black dark:text-white">
                    <div className="imgbox">
                        <img
                            src="https://i.ibb.co/HPN6jNB/Jabed-2.jpg"
                            className='imgs h-40 w-40'
                        />
                        <div className='flex  items-center justify-end -mt-16 gap-1 '>
                            <a href="mailto:marfaterrahman@gmail.com"><AiOutlineMail className='text-3xl' ></AiOutlineMail></a>
                            <a href="https://www.linkedin.com/in/marfater-rahman-jabed-17541b244/" target='__blank'><AiFillLinkedin className='text-3xl'></AiFillLinkedin></a>
                            <a href="https://github.com/Marfater-Rahman-Jabed" target='__blank'><AiFillGithub className='text-3xl'></AiFillGithub></a>
                            <ReactWhatsapp number="+8801827717200" message="Hi!!!" ><AiOutlineWhatsApp className='text-3xl'></AiOutlineWhatsApp></ReactWhatsapp>
                        </div>
                        <h1 className='text-center mt-10 text-2xl font-bold'>Marfater Rahman Jabed</h1>
                    </div>

                    <div className="content">
                        <h2 className=' font-bold text-xl'>Full Stack Developer</h2>

                        <p className='text-center mt-2 font-serif'>MERN stack developer and also Nextjs Developer. Expert in UI/UX designer  </p>

                    </div>
                </div>
                <div className="cards dark:bg-black dark:text-white">
                    <div className="imgbox">
                        <img
                            src="https://i.ibb.co/Vp0SJ5q/photo-2023-09-20-19-26-03.jpg"
                            className='imgs h-40 w-40'
                        />
                        {/* <div className='flex  items-center justify-end -mt-16 gap-1 '>

                            <a href="https://www.linkedin.com/in/raymundo-farrugia-cubilla-a46a80112" target='__blank'><AiFillLinkedin className='text-3xl'></AiFillLinkedin></a>

                        </div> */}
                        <h1 className='text-center mt-2 text-2xl font-bold'>Raymundo Farrugia </h1>
                    </div>

                    <div className="content">
                        <h2 className=' font-bold text-xl'>Head Of Business Operation & Development</h2>

                        <p className='text-center mt-2 font-serif'>Diplomatic Government Relations International Business Senior Director Development </p>



                    </div>
                </div>

                <div className="cards dark:bg-black dark:text-white">
                    <div className="imgbox">
                        <img
                            src="https://i.ibb.co/DYQSsj9/photomarketer.jpg"
                            className='imgs h-40 w-40'
                        />
                        {/* <div className='flex  items-center justify-end -mt-16 gap-1 '>
                            <a href="mailto:mdmahmudulhasantamzid2020@gmail.com"><AiOutlineMail className='text-3xl' ></AiOutlineMail></a>
                            <a href="https://www.linkedin.com/in/mahmudul-hasan-484771290" target='__blank'><AiFillLinkedin className='text-3xl'></AiFillLinkedin></a>
                            <a href="" ><AiFillGithub className='text-3xl'></AiFillGithub></a>
                            <ReactWhatsapp number="+880 1567-887369" message="Hi!!!" ><AiOutlineWhatsApp className='text-3xl'></AiOutlineWhatsApp></ReactWhatsapp>
                        </div> */}
                        <h1 className='text-center mt-2 text-2xl font-bold'>Mahmudul Hasan </h1>
                    </div>

                    <div className="content">
                        <h2 className=' font-bold text-xl'>Digital Marketer</h2>

                        <p className='text-center mt-2 font-serif'>Expert With Digital Marketing. Specialize in Shopify and Google. And also expert YouTube and a professional digital marketer. </p>

                    </div>
                </div>
                <div className="cards dark:bg-black dark:text-white">
                    <div className="imgbox">
                        <img
                            src="https://i.ibb.co/FxyBWq7/advisor.jpg"
                            className='imgs h-40 w-40'
                        />
                        {/* <div className='flex  items-center justify-end -mt-16 gap-1 '>
                            <a href="mailto:sayemmuhaimin@gmail.com"><AiOutlineMail className='text-3xl' ></AiOutlineMail></a>
                            <a href="https://www.linkedin.com/in/md-sayem-muhaimin-803a00228" target='__blank'><AiFillLinkedin className='text-3xl'></AiFillLinkedin></a>
                            <a href="https://github.com/Sayem0780" target='__blank'><AiFillGithub className='text-3xl'></AiFillGithub></a>
                            <ReactWhatsapp number="+8801537167147" message="Hi!!!" ><AiOutlineWhatsApp className='text-3xl'></AiOutlineWhatsApp></ReactWhatsapp>
                        </div> */}
                        <h1 className='text-center mt-2 text-2xl font-bold'>MD. Khursid Alam</h1>
                    </div>

                    <div className="content">
                        <h2 className=' font-bold text-xl'>Advisor</h2>

                        <p className='text-center mt-2 font-serif'>Honorable and respectable person to RackupIt Solution. Main Advisor in our Company. </p>



                    </div>
                </div>
                <div className="cards dark:bg-black dark:text-white">
                    <div className="imgbox">
                        <img
                            src="https://i.ibb.co/zrpLKJD/advisor2.jpg"
                            className='imgs h-40 w-40'
                        />
                        {/* <div className='flex  items-center justify-end -mt-16 gap-1 '>
                            <a href="mailto:marfaterrahman@gmail.com"><AiOutlineMail className='text-3xl' ></AiOutlineMail></a>
                            <a href="https://www.linkedin.com/in/marfater-rahman-jabed-17541b244/" target='__blank'><AiFillLinkedin className='text-3xl'></AiFillLinkedin></a>
                            <a href="https://github.com/Marfater-Rahman-Jabed" target='__blank'><AiFillGithub className='text-3xl'></AiFillGithub></a>
                            <ReactWhatsapp number="+8801827717200" message="Hi!!!" ><AiOutlineWhatsApp className='text-3xl'></AiOutlineWhatsApp></ReactWhatsapp>
                        </div> */}
                        <h1 className='text-center mt-2 text-2xl font-bold'>Shakirul Muktadir</h1>
                    </div>

                    <div className="content">
                        <h2 className=' font-bold text-xl'>HR Officer</h2>

                        <p className='text-center mt-2 font-serif'>MERN stack developer and also Nextjs Developer. Expert in UI/UX designer  </p>

                    </div>
                </div>



            </div>


        </div>
    );
};

export default MemberDetails;