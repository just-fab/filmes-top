import Carrousel from "../../components/Carrousel";
import MainLayout from "../../layouts/MainLayout";
import ListItems from "../../components/ListItems";
import Separator from "../../components/Separator";
import Genres from "../../components/Genres"
import { GlobalContext } from "../../contexts/AppContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadMovies, loadGenres } from "../../utils/loadData";

export default function Home() {
  const theContext = useContext(GlobalContext);
  const { state, setState } = theContext;
  const [page, setPage] = useState(1)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await loadMovies(page);
      const genres = await loadGenres();
      setState((prevState) => ({
        ...prevState,
        movies_highlight: page === 1 ? movies.slice(0, 3): prevState.movies_highlight,
        movies_list: page === 1 ? movies.slice(3) : movies,
        movie_genres: genres,
      }));
    };

    fetchMovies();
  }, [setState, page]);

  function changePage(event, value) {
    setPage(value);
  }

  function addGenre(g){
    if(state.search_genres.includes(g)){
      setState((prevState) => ({
        ...prevState,
        search_genres: [...prevState.search_genres.filter(i=>i!==g)],
      }));
    }else{
      setState((prevState) => ({
        ...prevState,
        search_genres: [...prevState.search_genres, g],
      }));
    }

    navigate('/pesquisar')
  }

  function selectItem(item){
    setState((prevState) => ({...prevState, selected_item: item}))
    navigate('/info')
  }

  return (
    <MainLayout>
        {state.movies_list.length > 0 && 
          <>
            <Separator name="Destaques"  />
            <Carrousel onHandleClick={selectItem}/>
            <Separator name="Descubra filmes" addClass="mt_2" />
            <Genres list={state.movie_genres} onHandleClick={addGenre} selected={state.search_genres}/>
            <ListItems movies={state.movies_list} onHandleChange={changePage} onHandleClick={selectItem}/>
          </>
        }
    </MainLayout>
  );
}
