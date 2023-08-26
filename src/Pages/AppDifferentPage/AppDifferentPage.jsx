import { useEffect } from "react";
import MakesDiv from "../../Components/MakesDiv/MakesDiv";
import { Helmet } from "react-helmet";

const AppDifferentPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="dark:bg-slate-600 dark:text-white">
            <Helmet>
                <meta charSet="utf-8" />
                <title>RackUp-Goal</title>
                <link rel="canonical" href="/makeDiv" />
                <meta name="description" content="RackUp Blog Page" />
                <meta name="keywords" content="Rackup,android,website,webpage,makediv,goal" />
            </Helmet>
            <MakesDiv></MakesDiv>
        </div>
    );
};

export default AppDifferentPage;