import { Box } from "@mui/material";
import PillButton from "../PillButton";

export default function Genres(props) {
  return (
    props.list !== undefined && props.list.length > 0 &&
    <Box className="d_flex js_between mx_auto w_60 flex_wrap mt_2">
      {props.list.map((genero) => (
        <PillButton key={genero.id} active={props.selected.includes(genero)}
          onHandleClick={() => props.onHandleClick(genero)}
          name={genero.name}
        />
      ))}
    </Box>
  );
}
