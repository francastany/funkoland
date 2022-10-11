import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import { useContext } from 'react';
import { CartContext } from './CartContext';

function CartWidget () {
    const ctx = useContext(CartContext)

    return(

    <button type="button" className="btn position-relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
        </svg>
        {
            ctx.cartQty() !== 0 ?
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                {
                    ctx.cartQty()
                }
                <span className="visually-hidden">cart items</span>
            </span>
            :
            <span className="badge rounded-pill visually-hidden">
            </span>
        }
    </button>    
    )
}

export default CartWidget;