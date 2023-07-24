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
        <div className=" py-32">
            <div className="mb-10">
                <h1 className='lg:text-5xl text-4xl font-bold text-center mb-8'>Simple Beautiful User Interface</h1>
                <p className=" text-center text-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero <br /> tempus, blandit posuere ligula varius magna congue cursus porta</p>
            </div>
            <div className="lg:px-24 px-5 py-6 ">
                <Slider {...settings}>
                    {
                        images.map((image, i) => <div key={i} className="mr-2" >
                            <img src={image} alt="" className="lg:h-[70vh] w-[350px] " />
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default SimpleInterfaceSection;