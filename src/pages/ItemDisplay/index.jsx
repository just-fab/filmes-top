import Layout from '../../layouts/Layout'
import Highlight from '../../components/Highlight'
import { GlobalContext } from '../../contexts/AppContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadMovie } from '../../utils/loadData';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CircleButton from '../../components/CircleButton';

export default function ItemDisplay(){
    const theContext = useContext(GlobalContext);
    const { state, setState} = theContext;
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchMovie = async () => {
            const movie = await loadMovie(state.selected_item.id);
            setState((prevState)=>({
                ...prevState, selected_item: movie
            }))
        }

        fetchMovie();
    },[state, setState])

    return(
        <Layout>
            <CircleButton type="voltar" icon={faArrowLeft} action={()=>{navigate('/')}} addClass="top_left"/>
            <Highlight obj={state.selected_item}/>
        </Layout>
    )
}