import {useEffect, useState} from "react";
import {TESTS} from "../../data/TESTS";
import { Link, useSearchParams } from "react-router-dom";
import { base_url } from "../../App";

function ThumbnailList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [testList, setTestList] = useState(TESTS);
    
    useEffect(() => {
        const currentLanguage = searchParams.get("lang") || "Kor";
        const currentCategory = searchParams.get("cat");
        if (currentCategory) {
            const filteredTests = TESTS.filter(
                (test) => (test?.info?.lang == currentLanguage 
                    && test?.info?.category == currentCategory));
            setTestList(filteredTests);
        } else {
            const filteredTests = TESTS.filter((test) => 
                test?.info?.lang == currentLanguage
            );
            setTestList(filteredTests); 
        };
        // setTestList();
        // console.log(searchParams.get("lang"));
        
    },[searchParams]);
    
    return (
    <div>
        {/* 이 이미지를 누르면 해당 테스트 Intro 페이지로 넘어가기 */}
        {/* Single Page Application */}
        {/* base_url/:testName */}
        {testList?.map((test) => (
            <Link to={`${base_url}/${test?.info?.mainUrl}`} 
            key={test?.info?.mainUrl}>
            <img style={{width:"100%"}} 
                src={test?.info?.thumbImage} 
                alt={test?.info?.mainUrl} 
               
            />
            </Link>
        ))}

    </div>
    );
}

export default ThumbnailList;