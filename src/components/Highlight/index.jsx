import { Box } from "@mui/material";
import { faHeart, faListUl } from "@fortawesome/free-solid-svg-icons";
import CircleButton from "../CircleButton";
import './style.css'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Highlight(props){
    return(
        <Box className="d_flex js_center mt_3">
            <Box className="card w_60 backdrop"  style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${props.obj.backdrop_path})`,
            }}>
                <Box className="backfilter w_100 d_flex card js_around text_white">
                    <Box className="w_30">
                        <img className="hi_img" src={`https://image.tmdb.org/t/p/w500${props.obj.poster_path}`} alt="pôster do filme"/>
                    </Box>
                    <Box className="w_60 info_panel">
                        <Box className=" d_flex flex_dir_column al_center js_start py_2">
                            <h3 className="title">{props.obj.title}</h3>
                            <Box className="d_flex js_start">
                                {props.obj.tagline && <h3><em>"{props.obj.tagline}"</em></h3>}
                            </Box>
                            <Box className="d_flex js_around flex_wrap mt_1 text_black">
                                {props.obj.genres && props.obj.genres.map((g) => (<h5 key={g.id}>{g.name}</h5>))}
                            </Box>
                            <p className="mt_2">{props.obj.overview}</p>
                        </Box>
                        <Box className="d_flex flex_wrap">
                            <h4>Duração: {Math.floor(props.obj.runtime/60)}h{props.obj.runtime%60}min</h4>
                            <h4>Data de lançamento: {props.obj.release_date}</h4>
                            <h4>Linguaguem: {props.obj.original_language}</h4>
                        </Box>
                        <Box className="d_flex mt_2">
                            <CircleButton icon={faHeart} size="xl"/>
                            <CircleButton icon={faListUl} size="xl"/>
                        </Box>
                        <Box className="mt_3 d_flex flex_dir_row flex_wrap">
                            {props.obj.production_companies && props.obj.production_companies.map(co=>(<>
                                <Box className="companies mr_1">
                                    {co.logo_path && <img key={co.id} className="company_logo" alt="logo da compania produtora do filme" src={`https://image.tmdb.org/t/p/w500${co.logo_path}`}/>}
                                </Box>
                            </>))}
                        </Box>
                    </Box>
                    
                </Box>
            </Box>
        </Box>
    )
}