import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const theContext = useContext(GlobalContext);
  const { state, setState } = theContext;
  const navigate = useNavigate();

  function setSearchText(text) {
    setState((prevState) => ({ ...prevState, 'search_text': text }));
  }

  function searchFor() {
    navigate('/pesquisar')
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      navigate(`/pesquisar?query=${encodeURIComponent(event.value)}`);
    }
  };

  return (
    <div className="d_flex mt_2 search_width">
      <input
        type="text"
        className="cs_input"
        placeholder="Digite aqui para pesquisar..."
        value={state.search_text}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyDown={handleKeyPress}
      />
      <button className="cs_input_button" onClick={searchFor}>
        <FontAwesomeIcon className="rotate90 ml-2" icon={faSearch} size="xl" />
      </button>
    </div>
  );
}
