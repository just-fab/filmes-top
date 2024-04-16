import './style.css'
export default function Badge(props){
    const text = props.text.length >= 3 ? '99+' : props.text;
    return(
        <span className='badge'>{text}</span>
    )
}