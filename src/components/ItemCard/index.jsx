import './style.css'
export default function ItemCard(props){
    return (
        <div className='card product_card bg_white text_center d_flex flex_dir_column' onClick={props.onClick}>
            <img src={props.img || require('../../assets/logo192.png')} alt="" />
            <h3>{props.title}</h3>
            <div className='info_holder d_flex js_around'>
                <h4 className='bg_green'>{props.rated}</h4>
            </div>
        </div>
    )
}