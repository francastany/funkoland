import ItemCount from '../ItemCount';
import '../../css/ItemDetail.css';

const ItemDetail = ({item}) => {
    return(
        <>
        {
            item && item.imgSrc 
            ? 
            <section className="container-fluid detail w-75 d-flex my-4">
                <img className='detailImg' src={item.imgSrc} alt={item.name} />

                <div className="detail-Info p-5 d-flex flex-column justify-content-evenly">
                    <h1>{item.name}</h1>
                    <p className='text-secondary'>Category: <span className='itemCategory'>{item.category}</span></p>

                    <p className="lead">{item.description}</p>
                    <h2>USD $ {item.price}</h2>
                    <p className='text-secondary'>Units available: {item.stock}</p>

                    <ItemCount
                        start={1}
                        stock={item.stock}
                    />
                </div>
            </section>
            : <div className='container-fluid text-center m-5'><div className='spinner-border' role='status'><span className='visually-hidden'>Loading...</span></div></div>
            }
        </>
    )
}

export default ItemDetail;