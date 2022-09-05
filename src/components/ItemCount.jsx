import { useState } from "react"


function ItemCount({ stock, start }) {
    
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

    const CartAlert = () => {
        (cartCant !== 1) ?  alert(`Se han añadido ${cartCant} productos al carrito.`) : alert(`Se ha añadido ${cartCant} producto al carrito`);
    }

    return (
        <>
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex align-items-center">
                <button onClick={CartAdd} className="btn btn-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
                <span className="mx-4 fs-4">{cartCant}</span>
                <button onClick={CartLess} className="btn btn-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </button>
            </div>
            <button onClick={CartAlert} className="btn btn-outline-dark mt-3">ADD TO CART</button>
        </div>
        </>
    )
}

export default ItemCount