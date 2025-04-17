import React from 'react';
import { useCopyToClipboard } from "@uidotdev/usehooks";
import {LinkOutlined,RedoOutlined,HomeOutlined} from '@ant-design/icons';
import { base_url } from '../../App';
import { useNavigate } from 'react-router-dom';
import styles from './resultButtonGroup.module.css';

//엔트디자인 사용
const ResultButtonGroup = ({testParam, resultParam}) => {
  const [copy, setCopy] = useCopyToClipboard();
  const navigate = useNavigate();
  const onClickRedoButton = () => {
    navigate(`/${testParam}`);
  };

  const onClickGoHomeButton = () => {
    navigate("/");
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.upperDiv}>
        <button className={styles.upperButton} onClick={() => {
          setCopy(`${base_url}/${testParam}/result/${resultParam}`);
          alert("URL이 복사되었습니다.");
          }}><LinkOutlined />
          &nbsp;  링크 복사
        </button>
        <button className={styles.upperButton} onClick={onClickRedoButton}><RedoOutlined />
          &nbsp;  다시 하기
        </button>
      </div>
      <div className={styles.bottomDiv}>
        <button className={styles.bottomButton} onClick={onClickGoHomeButton}><HomeOutlined />다른 테스트 하러 가기</button>
      </div>
    </div>
  );
};

export default ResultButtonGroup;