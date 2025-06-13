import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './Btns_header.module.scss';

function Btnsheader({ text, iconFa, to, onClick }) {
  return <Link to={to}>
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
  </Link>;
}

export default Btnsheader;