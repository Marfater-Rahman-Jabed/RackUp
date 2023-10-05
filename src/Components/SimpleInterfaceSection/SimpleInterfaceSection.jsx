import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/simpleInterface.jpg'
import image2 from '../../assets/simpleInterface1.jpg'
import image3 from '../../assets/simpleInterface2.jpg'
import image4 from '../../assets/simpleInterface4.jpg'
import image5 from '../../assets/simpleInterface5.jpg'
import image6 from '../../assets/simpleInterface.jpg'

import Slider from "react-slick";
const SimpleInterfaceSection = () => {
    const images = [image1, image2, image3, image4, image6, image5]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]


    };
    return (
        <div className=" bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-white py-24 " style={{ backgroundImage: "linear-gradient(180deg, purple 1px, 1px)", backgroundSize: "3px 3px" }}>
            <div className="mb-10">
                <h1 className='lg:text-5xl text-4xl font-bold text-center mb-8 text-white'>Simple Beautiful User Interface</h1>
                <p className=" text-center text-xl md:px-10 lg:px-64 text-white">Embrace simplicity and beauty in our user interface. An elegant and delightful design awaits, making your experience unforgettable</p>
            </div>
            <div className="lg:px-20 md:px-12 px-5 py-6 ">
                <Slider {...settings}>
                    {
                        images.map((image, i) => <div key={i} className="mr-2" >
                            <img src={image} alt="" className="lg:h-[70vh] lg:w-[28vw] w-[350px] " />
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default SimpleInterfaceSection;