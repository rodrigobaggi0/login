import BtnsHeader from '../../ui/btns_header/Btns_header';
import { faHome, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.scss';
import ButtonSwitch from '../../ui/btn_switch/ButtonSwitch';
import { useTheme } from '../../../theme/themeContext';



function Header() {
  const {toggleTheme} = useTheme()
  return <>
    <header className={styles.Header}>
      <BtnsHeader text="HOME" iconFa={faHome} to="/home" />
      <BtnsHeader text="LOGIN" iconFa={faSignInAlt} to="/" />
      
    </header>
    <ButtonSwitch onClick={toggleTheme}/>
  </>
}

export default Header;