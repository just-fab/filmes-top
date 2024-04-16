import { useContext, useEffect, useState } from "react";
import load from "../../mockdata/produtos"
//import load from "../../util/loadProducts";
import ItemCard from "../ItemCard";
import { GlobalContext } from "../../contexts/AppContext";

export default function ListItems(){

    const[produtos, setProdutos] = useState([])
    const theContext = useContext(GlobalContext);
    const {setState} = theContext;

    
    function toggleCart(p){
        setState(prevState => ({...prevState, "show_add_cart_modal" : !prevState.show_add_cart_modal, "selected_product": p}))
    }

    /*function echo(){
        console.log('echo')
    }*/

    useEffect(()=>{
        loadProds()
    }, [])

    async function loadProds(){
        //const listProd = await load();
        //setProdutos(listProd)
        setProdutos(load)
    }

    //const products = loadMock;
    

    return(
        <>
            {produtos.map((p)=>(
            <ItemCard key={p.id} 
            title={p.nome} 
            price={p.preco} 
            measurement={p.texto_medida || p.unidadeMedidaEnum}
            img={p.pathImg}
            onClick={()=>toggleCart(p)}/>
            ))}
        </>
    )
}