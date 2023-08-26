import { useEffect } from "react";
import AliThemeSection from "../../Components/AliThemeSection/AliThemeSection";
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
import SubscribeSection from "../../Components/SubscribeSection/SubscribeSection";
import UnLockSection from "../../Components/UnLockSection/UnLockSection";
import WorkFastDiv from "../../Components/WorkFastDiv/WorkFastDiv";
import { Helmet } from "react-helmet";
import MemberDetails from "../../Components/MemberDetails/MemberDetails";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>RackUp-Home</title>
                <link rel="canonical" href="/" />
                <meta name="description" content="RackUp Home Page" />
                <meta name="keywords" content="Rackup,android,website,webpage," />
            </Helmet>
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
            <AliThemeSection></AliThemeSection>
            <SubscribeSection></SubscribeSection>
            <MemberDetails></MemberDetails>
        </div>
    );
};

export default Home;