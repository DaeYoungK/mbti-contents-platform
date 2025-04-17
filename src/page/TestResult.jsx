import TestResultRenderer from "../components/testResult/TestResultRenderer";
import ShareButtonGroup from "../components/testResult/ShareButtonGroup";
import ResultButtonGroup from "../components/testResult/ResultButtonGroup";
import ResultThumbnailList from "../components/testResult/ResultThumbnailList";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TESTS } from "../data/TESTS";

function TestResult() {
    const navigate = useNavigate();
    const {testParam, resultParam} = useParams();
    const [renderResultInfo, setRenderResultInfo] = useState({});
    const [renderTestInfo, setRenderTestInfo] = useState({});

    useEffect(() => {
        const testInfo = TESTS.find((test) => (test.info.mainUrl == testParam));
        if(!testInfo) {
            alert("존재하지 않는 테스트입니다!");
            navigate("/");
        }
        setRenderTestInfo(testInfo);

        const resultInfo = testInfo?.results?.find(
            (result) => result.query == resultParam);
        if(!resultInfo){
            alert("존재하지 않는 결과값입니다!");
            navigate(`/${testInfo?.info?.mainUrl}`);
        }
        setRenderResultInfo(resultInfo);
        
    },[testParam, resultParam, navigate]);

    return <div>
        <TestResultRenderer renderResultInfo={renderResultInfo} />
        <ShareButtonGroup 
            testParam={testParam} 
            resultParam={resultParam} 
            renderTestInfo={renderTestInfo} />
        <ResultButtonGroup 
            testParam={testParam} 
            resultParam={resultParam} 
            renderTestInfo={renderTestInfo} />
        <ResultThumbnailList testParam={testParam}/>
    </div>;
}

// 1. Intro -> Quiz -> Loading -> Result
// 2. Direct Access

// /personalColor/result/ISFP

export default TestResult;
