import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

export default function CircleButton(props) {
  return (
    <>
      <button
        id={`circle_btn_${props.btn_type}`}
        className={`mr_2 circle_btn ${props.addClass}`}
        onClick={props.action}
      >
        <FontAwesomeIcon icon={props.icon} size="xl" />
      </button>
    </>
  );
}
