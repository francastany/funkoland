import { useContext } from "react";
import { CartContext } from "./CartContext";

import '../../css/Cart.css';

const Cart = () => {

    const ctx = useContext(CartContext)
    return (
        <>
            <h4 className="text-center m-3">YOUR CART</h4>
            <section className="w-75 shadow m-auto mb-4">
                {
                    ctx.cartList.length > 0 ?
                    ctx.cartList.map(item => 
                    <div className="cartProduct px-3 py-2 d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center w-50">
                            <img className="cartProduct-img" src={item.imgSrc} alt="Funko Img" />
                            <h3 className="m-0 ps-5 text-uppercase fw-bold">{item.name}</h3>
                        </div>
                        <h5 className="m-0">$ {item.price}</h5>
                        <span className="fs-6">{item.quantity} item(s)</span>
                        <h4 className="m-0 fw-bold">$ {item.price * item.quantity}</h4>
                        <button onClick={() => ctx.removeItem(item.id)} className="btn btn-sm btn-outline-secondary rounded-0">Delete this product</button>
                    </div>) :
                    <p className="text secondary text-center p-4">The cart is empty.</p>
                }
                <div className="d-flex justify-content-between">
                    <button onClick={ctx.clear} className="text-start btn btn-outline-LIGHT rounded-0 m-5">CLEAR ALL</button>
                    <button className="btn btn-dark rounded-0 m-5">CHECKOUT</button>
                </div>
            </section>
        </>
    )
}


export default Cart;