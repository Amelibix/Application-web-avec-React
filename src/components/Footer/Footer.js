import styles from "./Footer.module.scss";
import logoFooter from "../../assets/images/logofooter.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex flex-column align-items-center justify-content-center`}
    >
      <NavLink to="/">
        <img className={styles.logofooter} src={logoFooter} alt="Logo Kasa" />
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;