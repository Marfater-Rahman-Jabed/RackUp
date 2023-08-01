// import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const QuestionSection = () => {
    // const [mess, setMess] = useState('')
    const handleWhatsAppClick = (mess) => {
        console.log(mess)
        // const message = 'Hello, this is an automated message from my app!';
        const phoneNumber = '+8801537167147'; // Replace this with the recipient's phone number
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(mess)}`;
        window.open(whatsappUrl, '_blank');
    };


    // console.log(mess)

    return (
        <div className="bg-base-300 py-24">
            <div className="mb-12">
                <h1 className="lg:text-5xl text-4xl font-bold  text-center mb-4">Have Questions? Look Here.</h1>
                <p className=" text-center text-xl md:px-10 lg:px-64">Our comprehensive FAQ section has got you covered with all the answers you seek! No Hesitation, No Confusion, Feel Free to ask ! Don&apos;t be shy !</p>
            </div>
            {/* <button onClick={handleWhatsAppClick}>autowhatsapp</button> */}
            <div className="lg:mx-48 md:mx-20 mx-4">
                <Fade direction="up" delay={500}>
                    <div className=" p-4 items-center bg-base-200  border-none rounded-none mb-1">

                        <div className="text-2xl font-bold "  >
                            <button className="hover:underline " onClick={() => { handleWhatsAppClick('Hi, RackUp, I want a free trial'); }}>Do you want a free trial?</button>
                        </div>

                    </div>
                    <hr />
                    <hr />
                    <div className="mb-1 p-4 items-center bg-base-200  border-none rounded-none">

                        <div className="text-2xl font-bold  " >
                            <button className="hover:underline " onClick={() => { handleWhatsAppClick('Hi, RackUp, I want to update my bussiness'); }}>Have a busineed don&apos;t how to upadte it?</button>
                        </div>

                    </div>
                    <hr />
                    <hr />
                    <div className="p-4 mb-1 items-center bg-base-200  border-none rounded-none">

                        <div className="text-2xl font-bold  " >
                            <button className="hover:underline " onClick={() => { handleWhatsAppClick('Hi, RackUp, I Need Some Consultation '); }}>Need Some Consultation! Try it for free?</button>
                        </div>

                    </div>
                    <hr />
                    <hr />
                    <div className="p-4 mb-1 items-center bg-base-200  border-none rounded-none">

                        <div className="text-2xl font-bold  " >
                            <button className="hover:underline " onClick={() => { handleWhatsAppClick('Hi, RackUp, I want to turn my ideas into works of art'); }}>Turn your ideas into works of art ! Let&apos;s go !</button>
                        </div>

                    </div>
                    <hr />
                    <hr />
                    <div className="p-4 mb-1 items-center bg-base-200  border-none rounded-none">

                        <div className="text-2xl font-bold  " >
                            <button className="hover:underline " onClick={() => { handleWhatsAppClick('Hi, RackUp, I Need  a Bussiness Website'); }}>Need  a Bussiness Website ?</button>
                        </div>

                    </div>
                    <hr />
                    <hr />
                    <div className="p-4 mb-1 items-center bg-base-200  border-none rounded-none">

                        <div className="text-2xl font-bold  " >
                            <button className="hover:underline " onClick={() => { handleWhatsAppClick('Hi, RackUp, I Need  a Bussiness App'); }}>Need  a Bussiness App ?</button>
                        </div>

                    </div>
                    <hr />
                    <hr />


                </Fade>



            </div>
        </div>
    );
};

export default QuestionSection;