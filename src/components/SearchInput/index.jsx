import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext} from "react";
import { GlobalContext } from "../../contexts/AppContext";

export default function SearchInput() {
    const theContext = useContext(GlobalContext);
    const { state, setState } = theContext;
    
    function setSearchText(text){
      setState((prevState)=>({...prevState, search_text: text}))
    }
  
    function searchFor(){
      console.log(state.search_text)
    }
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
      />
      <button className="cs_input_button" onClick={searchFor}>
        <FontAwesomeIcon className="rotate90 ml-2" icon={faSearch} size="xl" />
      </button>
    </div>
  );
}
