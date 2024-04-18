import Layout from '../../Layouts/Layout'
import Highlight from '../../components/Highlight'
import { GlobalContext } from '../../contexts/AppContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadCredits, loadMovie } from '../../utils/loadData';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CircleButton from '../../components/CircleButton';
import Cast from '../../components/Cast';
import Separator from '../../components/Separator';

export default function ItemDisplay(){
    const theContext = useContext(GlobalContext);
    const { state, setState} = theContext;
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchMovie = async () => {
            const movie = await loadMovie(state.selected_item.id);
            const credits = await loadCredits(movie.id);

            setState((prevState)=>({
                ...prevState, selected_item: {...movie, cast: credits.cast, crew : credits.crew}
            }))
        }

        fetchMovie();
    },[state, setState])

    return(
        <Layout>
            <CircleButton type="voltar" icon={faArrowLeft} action={()=>{navigate('/')}} addClass="top_left"/>
            <Highlight obj={state.selected_item}/>
            <Separator name="Elenco"/>
            {state.selected_item.cast && <Cast cast={state.selected_item.cast}/>}
        </Layout>
    )
}