import '../../css/ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import customFetch from "../../utils/customFetch";
import funkosExtern from '../../utils/funkos';

import ItemList from '../ItemListContainer/ItemList';

function ItemListContainer(){

    const [FunkosList, setFunkos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        if (idCategory) {
            customFetch(1500, funkosExtern.filter(item => item.category == idCategory))
            .then(data => setFunkos(data))
            .catch(error => console.log(error))
        } //Si existe. Si tiene un valor
            else{
            customFetch(1500, funkosExtern)
            .then(data => setFunkos(data))
            .catch(error => console.log(error))
        }
    }, [idCategory])

    return (
        <>
            <ItemList products={ FunkosList } />
        </>
    );
}

export default ItemListContainer;