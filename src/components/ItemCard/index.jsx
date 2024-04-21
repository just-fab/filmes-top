import { Box } from '@mui/material';
import { loadMovie } from '../../utils/loadData';
import './style.css'
import { useEffect, useState } from 'react';

export default function ItemCard(props){
    const [item, setItem] = useState({})

    useEffect(()=>{
        const fetchMovie = async () =>{
            const movie = await loadMovie(props.obj.id);
            setItem(movie)
        }
        fetchMovie();
    },[props.obj.id, setItem])

    return ( item &&
        <Box className='card product_card bg_white text_center'>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}` || require('../../assets/logo192.png')} alt="" />
            <h3>{item.title}</h3>
            <div className='info_holder d_flex js_around al_center'>
                <h4 className={`${item.vote_average > 6 ? 'bg_green' : 'bg_yellow'} ml_3`}>{item.vote_average}</h4>
            </div>
            <div className='d_flex js_around flex_wrap mt_1'>
                {item.genres && item.genres.map((g)=>(<h5 key={g.id} className='bg_blue'>{g.name}</h5>))}
            </div>
            <div className='clear'></div>
        </Box>
    )
}