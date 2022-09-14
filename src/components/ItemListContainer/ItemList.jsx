import '../../css/ItemListContainer.css'
import Item from "./Item";


function ItemList({ products }) {
    return (
        <div className="w-75 my-3 mx-auto d-flex justify-content-evenly flex-wrap">
            {
                products.length > 0 
                ? products.map(funko => <Item key={funko.id} id={funko.id} name={funko.name} category={funko.category} imgSrc={funko.imgSrc} price={funko.price} stock={funko.stock} />)
                : <div className='spinner-border m-5' role='status'><span className='visually-hidden'>Loading...</span></div>
            }
        </div>
    );
}

export default ItemList;
