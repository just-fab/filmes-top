import Layout from '../../layouts/Layout'
import Highlight from '../../components/Highlight'
import { GlobalContext } from '../../contexts/AppContext';
import { useContext, useEffect } from 'react';
import { loadMovie } from '../../utils/loadData';

export default function ItemDisplay(){
    const theContext = useContext(GlobalContext);
    const { state, setState} = theContext;

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
            <Highlight obj={state.selected_item}/>
        </Layout>
    )
}