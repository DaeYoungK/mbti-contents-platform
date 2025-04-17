import React from 'react'
import { FacebookIcon, FacebookShareButton, XIcon, TwitterShareButton } from 'react-share';
import { base_url } from '../../App';
import styles from './shareButtonGroup.module.css';
import CopyButton from './CopyButton';

//npm i react-share
//npm i react-copy-to-clipboard react 18버전까지
//npm i @uidotdev/usehooks raect 19버전부터
const ShareButtonGroup = ({testParam, resultParam, renderTestInfo}) => {
  return (
    <div>
      <h3>친구에게 공유하기</h3>
      <div className={styles.shareButtonDiv}>
      <FacebookShareButton
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtag={`#${renderTestInfo?.info?.mainTitle}`}
        >
          <FacebookIcon round={true} size={48} className={styles.socialMediaIcon} />
        </FacebookShareButton>
        
        <TwitterShareButton
          title={renderTestInfo?.info?.mainTitle}
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtags={[renderTestInfo?.info?.mainTitle]}
        >
          <XIcon round={true} size={48}/>
        </TwitterShareButton>
        
        <CopyButton buttonUrl={`${base_url}/${testParam}/result/${resultParam}`}>
          {/* <button className={styles.urlShareButton} >URL</button> */}
        </CopyButton>
        
      </div>
    </div>
  );
};

export default ShareButtonGroup;