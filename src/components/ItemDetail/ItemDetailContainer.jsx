import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import customFetch from '../../utils/customFetch';
import ItemDetail from './ItemDetail';

import funkosExtern from '../../utils/funkos';

const ItemDetailContainer= () => {
    const [data, setData] = useState({})
    const { idFunko } = useParams()

    useEffect(()=> {
        customFetch(1500, funkosExtern.find(item => item.id === parseInt(idFunko)))
        .then(result => setData(result))
        .catch(error => console.log(error))
    }, [idFunko])

    return (
        <ItemDetail item={data}/>
    )
}

export default ItemDetailContainer;