import BeautySection from "../../Components/BeautySection/BeautySection";
import CrossPlatformSection from "../../Components/CrossPlatformSection/CrossPlatformSection";
import HeroSection from "../../Components/HeroSection/HeroSection";
import MakesDiv from "../../Components/MakesDiv/MakesDiv";
import MemoriesSection from "../../Components/MemoriesSection/MemoriesSection";
import PostPhotosSection from "../../Components/PostPhotosSection/PostPhotosSection";
import PowerFullAppSection from "../../Components/PowerFullAppSection/PowerFullAppSection";
import SimpleInterfaceSection from "../../Components/SimpleInterfaceSection/SimpleInterfaceSection";
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
            <CrossPlatformSection></CrossPlatformSection>
            <SimpleInterfaceSection></SimpleInterfaceSection>
        </div>
    );
};

export default Home;