import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

import '../../css/Cart.css';

const Cart = () => {

    const ctx = useContext(CartContext)
    return (
        <>
            <h3 className="text-center m-3">YOUR CART</h3>
            <section className="w-75 d-flex justify-content-between shadow m-auto mb-3">
                <div className="d-flex flex-column w-75"> 
                    {
                        ctx.cartList.length > 0 ?
                        <div className="d-flex flex-column w-100">
                        {
                            ctx.cartList.map(item => 
                            <div className="cartProduct px-3 py-2 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center w-50">
                                    <img className="cartProduct-img" src={item.imgSrc} alt="Funko Img" />
                                    <h3 className="m-0 ps-5 text-uppercase fw-bold">{item.name}</h3>
                                </div>
                                <div className="d-flex flex-column gap-2 align-items-center">
                                    <span className="fs-6">{item.quantity} item(s)</span>
                                    <h5 className="m-0">$ {item.price}</h5>
                                </div>
                                <h3 className="m-0 fw-bold">$ {item.price * item.quantity}</h3>
                                <button onClick={() => ctx.removeItem(item.id)} className="btn btn-sm btn-light rounded-0">Delete this product</button>
                            </div>)
                        }
                            <button onClick={ctx.clear} className="w-25 my-3 mx-2 align-self-start text-center btn btn-light rounded-0">CLEAR ALL</button>
                        </div>
                        :
                        <h5 className="text-center m-0 p-4">The cart is empty.</h5>
                    }
                    {/* <button onClick={ctx.clear} className="w-25 m-4 align-self-start text-center btn btn-outline rounded-0">CLEAR ALL</button> */}
                </div>
                {
                    ctx.cartList.length > 0 ?
                    <div>
                            <div className="cartFooterTotal m-3 p-4 border border-dark border-opacity-25 rounded-1">
                                <h3 className="mb-3 fw-bold">ORDER SUMMARY</h3>
                                <div className="container">
                                    <div className="row mb-3">
                                        <div className="col ps-0 ">SubTotal</div>
                                        <div className="col ps-0 text-end"><span>$ {ctx.subtotal()}</span></div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col ps-0">Taxes (10%)</div>
                                        <div className="col ps-0 text-end"><span>$ {ctx.taxes()}</span></div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col ps-0 fw-bold fs-3">TOTAL</div>
                                        <div className="col ps-0 text-end"><span className="fw-bold fs-3">$ {ctx.subtotal() - ctx.taxes()}</span></div>
                                    </div>
                                </div>
                                <button className="btn btn-dark rounded-0 w-100">CHECKOUT</button>
                            </div>
                    </div>
                    : 
                    <Link className='text-decoration-none text-dark' to='/'><button className="text-center btn btn-outline rounded-0 m-3">CONTINUE SHOPPING</button></Link>
                }
            </section>
        </>
    )
}


export default Cart;