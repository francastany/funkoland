import ItemCount from '../ItemCount/ItemCount';
import '../../css/ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [itemCant, setitemCant] = useState(0)
    
    const onAdd = (cartCant) => {
        (cartCant !== 1) ?  alert(`Se han añadido ${cartCant} productos al carrito.`) : alert(`Se ha añadido ${cartCant} producto al carrito`);
        setitemCant(cartCant);
    }

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
                    {
                        itemCant === 0 ?
                        <ItemCount
                            stock={item.stock}
                            onAdd={onAdd}
                        />
                        : <Link className='text-decoration-none text-dark' to='/cart'>
                            <button className='btn btn-outlined-dark'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-check me-2 mb-1" viewBox="0 0 16 16">
                                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                                CHECKOUT
                            </button>
                        </Link> 
                    }
                </div>
            </section>
            : <div className='container-fluid text-center m-5'><div className='spinner-border' role='status'><span className='visually-hidden'>Loading...</span></div></div>
            }
        </>
    )
}

export default ItemDetail;