import ItemCard from "../ItemCard";
import { Box, Pagination } from "@mui/material";

export default function ListItems(props) {
  return (
      <>
        <Box className="d_grid_2 w_60 mt_1 mb_3">
          {props.movies.map((p) => (
            <Box key={p.id} onClick={() => {
              props.onHandleClick(p)
            }}>
              <ItemCard
              obj={p}
              />
            </Box>
          ))}
        </Box>
        <Box className="clear">
          <Pagination count={10} page={props.page} onChange={props.onHandleChange} />
        </Box>
      </>
    )
}
