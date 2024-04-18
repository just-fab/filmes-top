import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignIn,
  faUserPlus,
  faIdBadge,
  faBoxes,
} from "@fortawesome/free-solid-svg-icons";
import { ListItemText, Menu, MenuItem } from "@mui/material";
import "./style.css";
import { useState } from "react";

export default function NavbarButton(props) {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  function openMenu(event) {
    setAnchor(event.currentTarget);
  }

  function closeMenu() {
    setAnchor(null);
  }

  function toggleMenu(e) {
    if (open) {
      closeMenu();
    } else {
      openMenu(e);
    }
  }

  return (
    <>
      <button
        id={`navbar_btn_$(props.btn_type)`}
        className="mr_2 navbar_btn"
        onClick={
          props.btn_type === "menu_button" ? toggleMenu : props.handleClick
        }
      >
        <FontAwesomeIcon icon={props.icon} size="xl" />
      </button>

      {props.btn_type === "menu_button" && (
        <Menu anchorEl={anchor} open={open} onClose={closeMenu}>
          {!props.logged && (
            <Menu anchorEl={anchor} open={open} onClose={closeMenu}>
              <MenuItem>
                <FontAwesomeIcon icon={faSignIn} size="lg" />
                <ListItemText className="ml_1 cs_list_item_text">
                  Entrar
                </ListItemText>
              </MenuItem>
              <MenuItem onClick={() => props.handleClick()}>
                <FontAwesomeIcon icon={faUserPlus} size="lg" />
                <ListItemText className="ml_1 cs_list_item_text">
                  Cadastrar
                </ListItemText>
              </MenuItem>
            </Menu>
          )}
          {props.logged && (
            <Menu anchorEl={anchor} open={open} onClose={closeMenu}>
              <MenuItem>
                <FontAwesomeIcon icon={faIdBadge} size="lg" />
                <ListItemText className="ml_1 cs_list_item_text">
                  Meu Perfil
                </ListItemText>
              </MenuItem>
              <MenuItem onClick={() => props.handleClick()}>
                <FontAwesomeIcon icon={faBoxes} size="lg" />
                <ListItemText className="ml_1 cs_list_item_text">
                  Meus Pedidos
                </ListItemText>
              </MenuItem>
            </Menu>
          )}
        </Menu>
      )}
    </>
  );
}
