import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../contexts/AppContext";
import { Box } from "@mui/material";

export default function Carrousel(props) {
  const theContext = useContext(GlobalContext);
  const { state } = theContext;
  const [actual, setActual] = useState(0);

  function rightAction() {
    console.log("right ", actual, " ", state.movies_highlight.length);
    if (actual < state.movies_highlight.length - 1) {
      setActual(actual + 1);
    } else {
      setActual(0);
    }
  }

  function leftAction() {
    if (actual === 0) {
      setActual(state.movies_highlight.length - 1);
    } else {
      setActual(actual - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (actual < state.movies_highlight.length - 1) {
        setActual(actual + 1);
      } else {
        setActual(0);
      }
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [actual, state.movies_highlight.length]);

  return (state.movies_highlight.length > 0 &&
    <Box className="d_flex js_center mt_3 w_60" onClick={()=>{props.onHandleClick(state.movies_highlight[actual])}}> 
      <div
        className="card carrousel"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${state.movies_highlight[actual].backdrop_path})`,
        }}
      >
        <div className="organizer d_flex js_between text_white px_1">
          <button
            className="left_action d_flex flex_dir_column js_center text_white"
            onClick={leftAction}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
          <div className="pos_rel">
            <div className="text">
              <h2 className="text_white">
                {state.movies_highlight[actual].title}
              </h2>
            </div>
          </div>
          <button
            className="right_action d_flex flex_dir_column js_center text_white"
            onClick={rightAction}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>
      </div>
    </Box>
  );
}
