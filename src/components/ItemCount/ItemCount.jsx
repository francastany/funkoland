import { useState } from "react"

function ItemCount({ stock, start = 0, onAdd }) {
    
    const [cartCant, setCartCant] = useState(start);

    const CartAdd = () => {
        if(cartCant < stock){
            setCartCant(cartCant + 1)
        }
    }

    const CartLess = () => {
        if(cartCant > start ){
            setCartCant(cartCant - 1)
        }
    }

    return (
        <>
        <div className="d-flex align-items-center gap-2">
            <div className="d-flex justify-content-between align-items-center bg-light rounded">
                <button onClick={CartAdd} className="btn btn-link text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
                <span className="mx-2 fs-6">{cartCant}</span>
                <button onClick={CartLess} className="btn btn-link text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </button>
            </div>
            {
                stock && cartCant ?
                <button onClick={() => onAdd(cartCant)} className="addToCart btn btn-dark">ADD TO CART</button>
                : <button className="btn btn-outline-secondary" disabled>ADD TO CART</button>
            }
        </div>
        </>
    )
}

export default ItemCount