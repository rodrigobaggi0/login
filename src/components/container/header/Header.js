import { Link } from "react-router-dom";
import styles from "./header.module.scss"


function Header() {
    return <>
        <header className={styles.Header}>
            <Link className={styles.Btns_header} to={'/home'}>HOME</Link>
            <Link className={styles.Btns_header} to={'/'}>LOGIN</Link>
        </header>

    </>
}
export default Header