import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from './ItemDetail';

import firestoreFetchDetail from "../../utils/firestoneFetchDetail";

const ItemDetailContainer= () => {
    const [data, setData] = useState({})
    const { idFunko } = useParams()

    useEffect(()=> {
        firestoreFetchDetail(idFunko)
        .then(result => setData(result))
        .catch(err => console.log(err))
    }, [idFunko])

    return (
        <ItemDetail item={data}/>
    )
}

export default ItemDetailContainer;