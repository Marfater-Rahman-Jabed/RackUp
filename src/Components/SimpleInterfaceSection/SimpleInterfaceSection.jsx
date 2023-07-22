import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
const SimpleInterfaceSection = () => {
    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 500
    // };
    return (
        <div className=" py-16">
            <div >
                <h1 className='lg:text-5xl text-4xl font-bold text-center'>Simple Beautiful User Interface</h1>
                <p className=" text-center text-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero <br /> tempus, blandit posuere ligula varius magna congue cursus porta</p>
            </div>
            {/* <div>
                <Slider {...settings}>
                    <div>
                        x
                    </div>
                    <div>
                        x
                    </div>
                    <div>
                        x
                    </div>
                    <div>
                        x
                    </div>
                    <div>
                        x
                    </div>
                    <div>
                        x
                    </div>
                </Slider>
            </div> */}
        </div>
    );
};

export default SimpleInterfaceSection;