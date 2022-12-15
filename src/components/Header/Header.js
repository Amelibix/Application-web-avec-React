import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";

function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <NavLink to="/">
        <img className={styles.logo} src={logo} alt="Logo Kasa" />
      </NavLink>

      <ul>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          A Propos
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
