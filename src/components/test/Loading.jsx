import Lottie from "react-lottie"; //npm i react-lottie 애니메이션 json 읽기
import * as animationData from '../../assets/loading-animation.json';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Loading({mbtiScore, currentTest}) {
    const navigate = useNavigate();
    const [finalQuery, setFinalQuery] = useState("");
    const defaultOption = {
        loop: true,
        autoplay: true, //로딩화면 뜨는순간 자동
        animationData: animationData.default,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice" //x축의 가운데 맞춰서 랜더링
        }
    };
    //loadingTime -> 3.7초
    const loadingTime = 3700; // ms
    useEffect(() => {
        // 4개의 슬롯 Array [[E,I], [N,S], [T,F], [J,P]]
        const mbitPairs = [
            ["E", "I"],
            ["N", "S"],
            ["T", "F"],
            ["J", "P"]
        ];
        // 비어있는 문자열
        let resultType = "";
        // Array 순회 -> 각 슬롯의 winner 선정 -> 문자열 변수에 추가
        for (let pair of mbitPairs) {
            let firstType = pair[0]; //E, N, T, J
            let secondType = pair[1]; //I, S, F, P
            let firstTypeScore = mbtiScore[firstType]; //2, ...
            let secondTypeScore = mbtiScore[secondType]; //1, ...
            firstTypeScore > secondTypeScore ? resultType += firstType : resultType += secondType
        }
        console.log("resultType", resultType);
        
        const resultQuery = currentTest?.results?.find((result) => (
        result?.type == resultType
    ))?.query
    setFinalQuery(resultQuery);
    console.log("resultQuery", resultQuery);
    }, [mbtiScore, currentTest]);

    useEffect(() => {
            let timeout = setTimeout(() => {
                // resultQuery 활용해서 결과 페이지로 라우팅하기
                // navigate(`/${테스트의메인url}/result/${결과파람}`)
                finalQuery && 
                navigate(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`)
            }, loadingTime);
            return () => {
                clearTimeout(timeout); //메모리 누수를 막기 위함입니다.
            };
    },[loadingTime, navigate, finalQuery, currentTest?.info?.mainUrl]);

    return <Lottie options={defaultOption} height={250} width={250} style={{marginTop: "23rem"}}/>;
}

export default Loading;

// Loading Animation
// mbtiScore Calcul -> Result MBTI Type ex. "ENFP"
// N초 -> Result Page Routing
// base_url/personalColor/result/:resultParam