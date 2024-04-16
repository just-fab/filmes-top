import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchInput(props){
    return (
        <div className='d_flex mt_2 search_width'>
            <input type="text" className='cs_input' placeholder='Pesquisar...'
                value={props.text}
                onKeyDown={(e)=>{props.handleChange(e.target.value); console.log(props.text)}}/>
            <button className='cs_input_button'>
                <FontAwesomeIcon className='rotate90 ml-2' icon={faSearch} size="xl"/>
            </button>
        </div>
    )
}