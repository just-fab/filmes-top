import { useContext } from "react";
import ItemCard from "../ItemCard";
import { GlobalContext } from "../../contexts/AppContext";

export default function ListItems() {
  const theContext = useContext(GlobalContext);
  const { state } = theContext;
  
  return (state.movies_list.length > 0 &&
    <>
      {state.movies_list.map((p) => (
        <ItemCard
          key={p.id}
          title={p.title}
          rated={p.vote_average}
          img={`https://image.tmdb.org/t/p/w500${p.poster_path}`}
          onClick={() => {console.log(p)}}
        />
      ))}
    </>
  );
}
