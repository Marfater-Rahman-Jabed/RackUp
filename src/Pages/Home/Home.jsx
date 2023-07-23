import BeautySection from "../../Components/BeautySection/BeautySection";
import CrossPlatformSection from "../../Components/CrossPlatformSection/CrossPlatformSection";
import CustomerReviewSection from "../../Components/CustomerReviewSection/CustomerReviewSection";
import HeroSection from "../../Components/HeroSection/HeroSection";
import MakesDiv from "../../Components/MakesDiv/MakesDiv";
import MemoriesSection from "../../Components/MemoriesSection/MemoriesSection";
import PostPhotosSection from "../../Components/PostPhotosSection/PostPhotosSection";
import PowerFullAppSection from "../../Components/PowerFullAppSection/PowerFullAppSection";
import QuestionSection from "../../Components/QuestionSection/QuestionSection";
import SimpleInterfaceSection from "../../Components/SimpleInterfaceSection/SimpleInterfaceSection";
import UnLockSection from "../../Components/UnLockSection/UnLockSection";
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
            <CustomerReviewSection></CustomerReviewSection>
            <UnLockSection></UnLockSection>
            <QuestionSection></QuestionSection>
        </div>
    );
};

export default Home;