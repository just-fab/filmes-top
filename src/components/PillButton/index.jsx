import './style.css'

export default function PillButton(props){
    return (
        <button className={`pillbutton mb_05 ${props.active ? 'active' : ''}`} onClick={props.onHandleClick}>{props.name}</button>
    )
}