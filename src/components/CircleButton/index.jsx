import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

export default function CircleButton(props) {
  return (
    <>
      <button
        id={`navbar_btn_$(props.btn_type)`}
        className="mr_2 navbar_btn"
      >
        <FontAwesomeIcon icon={props.icon} size="xl" />
      </button>
    </>
  );
}
