import ContentHolder from "../../components/ContentHolder";
import Carrousel from "../../components/Carrousel";
import MainLayout from "../../Layouts/MainLayout";
import ListItems from "../../components/ListItems";
import { GlobalContext } from "../../contexts/AppContext";
import { useContext, useEffect } from "react";
import { loadMovies } from "../../utils/loadData";

export default function Home() {
  const theContext = useContext(GlobalContext);
  const { setState } = theContext;

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await loadMovies();
      setState((prevState) => ({
        ...prevState,
        movies_discover: movies,
        movies_highlight: movies.slice(0, 3),
        movies_list: movies.slice(3)
      }));
    };

    fetchMovies();
  }, [setState]);

  return (
    <MainLayout>
      <ContentHolder csClasses="d_flex js_center mt_3 w_60">
        <Carrousel />
      </ContentHolder>
      <ContentHolder csClasses="d_grid_2 w_60 mt_3 mb_3">
        <ListItems />
      </ContentHolder>
    </MainLayout>
  );
}
