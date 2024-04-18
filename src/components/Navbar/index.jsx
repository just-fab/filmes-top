import "./style.css";
import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavbarButton from "../NavbarButton";
import MenuHamburger from "../MenuHamburger";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/AppContext";

export default function Navbar(props) {
  const theContext = useContext(GlobalContext);
  const { state } = theContext;

  return (
    <div className="navbar bg_dark">
      <MenuHamburger className="menu_hamburger" />
      <div className="brand">
        <a href="/">
          <img
            className="logo"
            src={require("../../assets/logo192.png")}
            alt="logo da marca"
          />
          <div className="text ml_1">{state.application_name}</div>
        </a>
      </div>
      <div className="empty"></div>
      <div className="actions">
        <NavbarButton
          icon={faUser}
          btn_type="menu_button"
          logged={state.logged}
        />
      </div>
    </div>
  );
}
