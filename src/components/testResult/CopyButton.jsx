import { useCopyToClipboard } from "@uidotdev/usehooks";
import styles from './shareButtonGroup.module.css';

// export default function CopyButton({buttonUrl}) {
//   const [copiedText, copy] = useCopyToClipboard();

//   return (
//     <div>
//       <button className={styles.urlShareButton} onClick={() => {copy({buttonUrl}); alert("URL을 복사하였습니다.");}}>URL</button>
//       {copiedText && <p hidden>복사 완료: {buttonUrl}</p>}
//     </div>
//   );
// }

export default function CopyButton({buttonUrl}) {
    const [copy, setCopy] = useCopyToClipboard();
  
    return (
      <div>
        <button className={styles.urlShareButton} onClick={() => {
            setCopy(`${buttonUrl}`); 
            alert("URL이 복사되었습니다.");}}>URL</button>      
      </div>
    );
  }