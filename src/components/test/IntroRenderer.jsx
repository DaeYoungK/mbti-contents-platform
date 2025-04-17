import { useState } from "react";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Loading from "./Loading";

function IntroRenderer({currentTest}) {
    // 점수판
    // Redux / Zustand
    const [mbtiScore, setMbtiScore] = useState({
        //4개의 슬롯 ][E,I], [N,S], [T,F], [J,P]]
        E: 0,
        I: 0,
        N: 0,
        S: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0
    });
    const [mode, setMode] = useState("intro"); //quiz, loading
    if(mode == "intro") {
        return <Intro info={currentTest?.info} setMode = {setMode} />;
    } else if (mode == "quiz"){
        return (
        <Quiz 
            setMode={setMode}
            questions={currentTest?.questions}
            mbtiScore={mbtiScore} 
            setMbtiScore={setMbtiScore}
            />
        );
    } else if (mode == "loading") {
        return <Loading mbtiScore={mbtiScore} currentTest={currentTest} />;
    } else {
        return <div>잘못된 페이지입니다!</div>;
    }
    return <div>{currentTest?.info?.mainTitle}</div>;

}

export default IntroRenderer;
//base_url/personalColor
//1. Intro
//2. Quiz
//3. Loading