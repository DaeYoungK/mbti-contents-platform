import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./categoryButtons.module.css";

function CategoryButtons() {
    const [searchParams] = useSearchParams();
    const [language, setLanguage] = useState("Kor");
    const navigate = useNavigate();

    useEffect(() => {
        const currentLang = searchParams.get("lang") || "Kor";
        setLanguage(currentLang);
    },[searchParams]);

    const onCategoryButtonClick = (category) => {
        // mbti.com -> mbti.com/?lang=Kor&cat=love
        // navigate(`/?lang=${language}&cat=${category}`);
        if (category == "all") {
            navigate(`/?lang=${language}`);
        } else if(category == "love" || category == "characteristic"){
            navigate(`/?lang=${language}&cat=${category}`);
        }  else {
            alert("잘못된 카테고리 입니다.");
            navigate(`/?lang=${language}`);
        }
    };

    return (
    <div>
        {/* mbti.com | mbti.com/?lang=Eng */}
        <button 
            className={styles.categoryButton}
            onClick={() => onCategoryButtonClick("all")}>전체</button>
        {/* mbti.com | mbti.com/?lang=Eng -> &cat=love */}
        <button 
            className={styles.categoryButton}
            onClick={() => onCategoryButtonClick("love")}>연애</button>
        {/* mbti.com | mbti.com/?lang=Eng -> &cat=characteristic */}
        <button 
            className={styles.categoryButton}
            onClick={() => onCategoryButtonClick("characteristic")}>성격</button>
    </div>
    );
}


export default CategoryButtons;

// mbti.com/?lang=Kor&cat=love
// lang=Kor | cat=love|char|all
// cat=love | lang=Kor|ENG|JP (X)