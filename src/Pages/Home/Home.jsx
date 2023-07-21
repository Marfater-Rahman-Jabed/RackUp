import BeautySection from "../../Components/BeautySection/BeautySection";
import HeroSection from "../../Components/HeroSection/HeroSection";
import MakesDiv from "../../Components/MakesDiv/MakesDiv";
import PostPhotosSection from "../../Components/PostPhotosSection/PostPhotosSection";
import PowerFullAppSection from "../../Components/PowerFullAppSection/PowerFullAppSection";
import WorkFastDiv from "../../Components/WorkFastDiv/WorkFastDiv";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <WorkFastDiv></WorkFastDiv>
            <PostPhotosSection></PostPhotosSection>
            <MakesDiv></MakesDiv>
            <PowerFullAppSection></PowerFullAppSection>
            <BeautySection></BeautySection>
        </div>
    );
};

export default Home;