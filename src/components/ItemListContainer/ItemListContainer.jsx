import '../../css/ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// import customFetch from "../../utils/customFetch";
// import funkosExtern from '../../utils/funkos';
// import { db } from '../../utils/firebaseConfig'; 
// import { query, collection, getDocs } from "firebase/firestore";
import ItemList from '../ItemListContainer/ItemList';

import firestoreFetch from '../../utils/firestoneFetch';

function ItemListContainer(){

    const [FunkosList, setFunkos] = useState([]);
    const { idCategory } = useParams();
    
    useEffect(() => {
        (idCategory) ?
        firestoreFetch()
            .then(result => setFunkos(result.filter(item => item.category === idCategory)))
            .catch(err => console.log(err))
        :
        firestoreFetch()
            .then(result => setFunkos(result))
            .catch(err => console.log(err))
    }, [idCategory])

    return (
        <>
            <ItemList products={ FunkosList } />
        </>
    );
}

export default ItemListContainer;