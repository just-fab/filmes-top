import { Box } from '@mui/material'
import './style.css'

export default function Separator(props){
    return(
        <Box className={`mx_auto mt_3 w_60 ${props.addClass}`}>
            <div className="divider"></div>
            <h3>{props.name}</h3>
        </Box>
    )
}