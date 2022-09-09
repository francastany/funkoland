import '../../css/ItemListContainer.css'
import Item from "./Item";


function ItemList({ FunkosList }) {
    return (
        <div className="w-75 my-3 mx-auto d-flex justify-content-evenly flex-wrap">
            {
                (FunkosList.length > 0) ?
                FunkosList.map(funko => <Item key={funko.id} name={funko.name} category={funko.category} imgSrc={funko.imgSrc} price={funko.price} stock={funko.stock} />)
                : <div className='spinner-border m-5' role='status'><span className='visually-hidden'>Loading...</span></div>
            }
        </div>
    )
}

export default ItemList;
