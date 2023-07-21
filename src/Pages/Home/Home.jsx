import HeroSection from "../../Components/HeroSection/HeroSection";
import MakesDiv from "../../Components/MakesDiv/MakesDiv";
import PostPhotosSection from "../../Components/PostPhotosSection/PostPhotosSection";
import WorkFastDiv from "../../Components/WorkFastDiv/WorkFastDiv";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <WorkFastDiv></WorkFastDiv>
            <PostPhotosSection></PostPhotosSection>
            <MakesDiv></MakesDiv>
        </div>
    );
};

export default Home;