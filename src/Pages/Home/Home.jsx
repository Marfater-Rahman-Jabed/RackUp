import BeautySection from "../../Components/BeautySection/BeautySection";
import HeroSection from "../../Components/HeroSection/HeroSection";
import MakesDiv from "../../Components/MakesDiv/MakesDiv";
import MemoriesSection from "../../Components/MemoriesSection/MemoriesSection";
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
            <MemoriesSection></MemoriesSection>
        </div>
    );
};

export default Home;