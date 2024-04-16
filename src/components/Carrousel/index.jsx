import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import destaques from '../../mockdata/destaques'

const highlight = destaques;

export default function Carrousel(props){

    const [actual, setActual] = useState(0)
    
    function rightAction(){
        console.log('right ', actual, ' ', highlight.length)
        if(actual < highlight.length-1){
            setActual(actual + 1)
        }else{
            setActual(0)
        }
    }

    function leftAction(){
        console.log('left', actual, ' ', highlight.length)
        if(actual === 0){
            setActual(highlight.length-1)
        }else{
            setActual(actual - 1)
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(actual < highlight.length-1){
                setActual(actual + 1)
            }else{
                setActual(0)
            }
        }, 7000);
        return () => {
            clearInterval(interval);
        }
    },[actual])

    return(
        <div className="card carrousel" style={{backgroundImage: `url(${highlight[actual].img})`}}>
           <div className='organizer d_flex js_between text_white px_1'>
            <button className='left_action d_flex flex_dir_column js_center text_white'
                onClick={leftAction}>
                <FontAwesomeIcon icon={faChevronLeft} size='2x'/>
            </button>
            <div className='pos_rel'>
                <div className='text'>
                    <h2 className='text_white'>{highlight[actual].titulo}</h2>
                </div>
            </div>
            <button className='right_action d_flex flex_dir_column js_center text_white'
                onClick={rightAction}>
                <FontAwesomeIcon icon={faChevronRight} size='2x'/>
            </button>
           </div>
            <div className="promo">
                {props.price}
            </div>
        </div>
    )
}