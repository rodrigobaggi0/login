import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Btns_header.module.scss'



function Btns_header({text, iconFa, onClick}) {
  return <>
    <div className={styles.button_container} onClick={onClick}>
      <button className={styles.real_button}></button>
      <div className={`${styles.spin} ${styles.spin_blur}`}></div>
      <div className={`${styles.spin} ${styles.spin_intense}`}></div>
      <div className={styles.backdrop}></div>
      <div className={styles.button_border}>
        <div className={`${styles.spin} ${styles.spin_inside}`}></div>
        <div className={styles.button}>
          {text}
           <FontAwesomeIcon icon={iconFa} />
        </div>
      </div>
    </div>
  </>
}
export default Btns_header;   