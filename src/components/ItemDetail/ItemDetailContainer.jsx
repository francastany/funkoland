import { useState, useEffect } from "react";
import customFetch from '../../utils/customFetch'
import ItemDetail from './ItemDetail';

// const { funkosExtern } = require('../../utils/funkos.js');
import funkosExtern from '../../utils/funkos'
console.log(funkosExtern)

const ItemDetailContainer= () => {
    const [data, setData] = useState({})

    useEffect(()=> {
        customFetch(1500, funkosExtern[28])
        .then(result => setData(result))
        .catch(error => console.log(error))
    }, [])
    console.log(data);

    return (
        <ItemDetail item={data}/>
    )
}

export default ItemDetailContainer;