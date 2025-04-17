import { useEffect, useState } from "react";
import styles from './quiz.module.css';
import { Flex, Progress } from 'antd'; //npm i antd 디자인
import { arrayShuffler } from "../../tools/tools";

function Quiz({setMode, questions, mbtiScore, setMbtiScore}) {
    const [questionNum, setQuestionNum] = useState(0);
    const onOptionClick = (type) => {
        // mbtiScroe update
        mbtiScore[type] += 1;
        setMbtiScore({...mbtiScore});
        setQuestionNum((prev) => prev + 1);
        
    };
    useEffect(() => {
        if(questionNum == questions.length) {
            setMode("loading");
        }
        console.log("questionNum", questionNum)
    }, [questionNum, questions.length, setMode]);
    return (
    <div>
        <h3 className={styles.questionText}>{questions[questionNum]?.question}</h3>
        {/* */}
        {questions[questionNum]?.answers &&
        arrayShuffler(questions[questionNum]?.answers)?.map((option) => (
        <button 
            className={styles.optionButton}
            onClick={() => onOptionClick(option.type)}
            key={option.content}
            >
            {option.content}
            </button>
        ))}
        {/*
        <button className={styles.optionButton}
        onClick={() => onOptionClick(questions[questionNum]?.answers[0]?.type)}>
            {questions[questionNum]?.answers[0]?.content}</button>
        <button className={styles.optionButton}
        onClick={() => onOptionClick(questions[questionNum]?.answers[1]?.type)}>
            {questions[questionNum]?.answers[1]?.content}</button>
            */}
        {/* */}
        <Progress percent={questionNum / questions.length * 100} showInfo={false}/>
        <h5>{questionNum} / {questions.length}</h5>
    </div>
    );
}

export default Quiz;

// 16 Results 
// 12(4 x 3) Questions - Options selection
// E: 2 / I: 1 / ... / J: 3 / P: 0
// MBTI Calcul ex. ENFJ
// 12 end -> loading
// CSS
// Progress bar

// shuffling answer options