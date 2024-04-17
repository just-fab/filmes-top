import ContentHolder from "../../components/ContentHolder";
import Carrousel from "../../components/Carrousel";
import Layout from "../../Layouts/Layout";
import SearchInput from "../../components/SearchInput";
import ListItems from "../../components/ListItems";
import { GlobalContext } from "../../contexts/AppContext";
import { useContext, useEffect} from "react";
import { loadMovies } from "../../utils/loadData";

export default function Home() {
  const theContext = useContext(GlobalContext);
  const { state, setState } = theContext;

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await loadMovies();
      setState((prevState) => ({
        ...prevState,
        movies_list: movies.slice(3),
        movies_highlight: movies.slice(0, 3),
      }));
    };

    fetchMovies();
  }, [setState]);

  return (
    <Layout>
      <ContentHolder csClasses="d_flex js_center w_60">
        <SearchInput />
      </ContentHolder>
      <ContentHolder csClasses="d_flex js_center mt_3 w_60">
        <Carrousel />
      </ContentHolder>
      <ContentHolder csClasses="d_grid_2 w_60 mt_3 mb_3">
        <ListItems />
      </ContentHolder>
    </Layout>
  );
}
