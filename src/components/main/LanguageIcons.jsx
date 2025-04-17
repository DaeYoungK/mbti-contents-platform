//npm i react-circle-flags
//npm install --save react-circle-flags

import { CircleFlag } from "react-circle-flags";
import { useNavigate } from "react-router-dom";
import styles from "./languageIcons.module.css";

//https://www.npmjs.com/package/react-circle-flags
function LanguageIcons() {
    const navigate = useNavigate();

    const onButtonClick = (lang) => {
        navigate(`/?lang=${lang}`);
        // console.log(`/?lang=${lang}`);
        
    }

    return (
    <div>
        {/* -> mbti.com/?lang=kor */}
        <CircleFlag 
            className={styles.flagIcon}
            onClick={() => onButtonClick('Kor')} 
            countryCode="kr" 
            width={48}/>
        {/* -> mbti.com/?lang=Eng */}
        <CircleFlag 
            className={styles.flagIcon}
            onClick={() => onButtonClick('Eng')} 
            countryCode="us"
            width={48}/>
        {/* -> mbti.com/?lang=JP */}
        <CircleFlag 
            className={styles.flagIcon}
            onClick={() => onButtonClick('JP')} 
            countryCode="jp" 
            width={48}/>
    </div>
    );
};

export default LanguageIcons;