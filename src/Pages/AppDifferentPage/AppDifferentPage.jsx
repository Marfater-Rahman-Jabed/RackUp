import { useEffect } from "react";
import MakesDiv from "../../Components/MakesDiv/MakesDiv";

const AppDifferentPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="">
            <MakesDiv></MakesDiv>
        </div>
    );
};

export default AppDifferentPage;