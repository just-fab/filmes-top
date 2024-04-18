import { useContext } from 'react'
import { GlobalContext } from '../../contexts/AppContext'
import './style.css'
import { Box } from '@mui/material';

export default function ItemCard(props){
    const theContext = useContext(GlobalContext);
    const { state } = theContext;

    function getGenres(n){
        return [...state.movie_genres.filter(g => n.includes(g.id))]
    }

    return ( props.obj &&
        <Box className='card product_card bg_white text_center'>
            <img src={`https://image.tmdb.org/t/p/w500${props.obj.poster_path}` || require('../../assets/logo192.png')} alt="" />
            <h3>{props.obj.title}</h3>
            <div className='info_holder d_flex js_around al_center'>
                <h4 className={`${props.obj.vote_average > 6 ? 'bg_green' : 'bg_yellow'} ml_3`}>{props.obj.vote_average}</h4>
            </div>
            <div className='d_flex js_around flex_wrap mt_1'>
                {getGenres(props.obj.genre_ids).map((g)=>(<h5 key={g.id} className='bg_blue'>{g.name}</h5>))}
            </div>
            <div className='clear'></div>
        </Box>
    )
}