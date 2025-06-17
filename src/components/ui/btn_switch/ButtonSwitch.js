import styles from './button_switch.module.scss';

function ButtonSwitch({ onClick }) {
  return (
    <label className={styles.switchButton} htmlFor="switch">
      <div className={styles.switchOuter}>
        <input id="switch" type="checkbox" onClick={onClick} />
        <div className={styles.button}>
          <span className={styles.buttonToggle}></span>
          <span className={styles.buttonIndicator}></span>
        </div>
      </div>
    </label>
  );
}

export default ButtonSwitch;