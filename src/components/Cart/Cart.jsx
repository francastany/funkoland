import '../../css/Cart.css';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from "firebase/firestore";
import { CartContext } from "./CartContext";
import { db } from '../../utils/firebaseConfig';
import Swal from 'sweetalert2';

const Cart = () => {

    const ctx = useContext(CartContext)

    const createOrder = async () => {
        let itemsFromDB = ctx.cartList.map(item => ({
            key: item.id,
            id: item.id,
            title: item.name,
            price: item.price,
            quantity: item.quantity
        }))
        const {value: formValues} = await Swal.fire({
            title: 'Finish your purchase',
            html:
                '<input id="swal-input1" placeholder="Full Name" class="swal2-input">' +
                '<input id="swal-input2" placeholder="Email" class="swal2-input">' +
                '<input id="swal-input3" placeholder="Phone" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value,
                document.getElementById('swal-input3').value
                ]
            }
        })
        if (formValues) {
            // Swal.fire(formValues[0])
            let order = {
                buyer: {
                    name: formValues[0],
                    email: formValues[1],
                    phone: formValues[2]
                },
                date: serverTimestamp(),
                items: itemsFromDB,
                total: ctx.total()
            }
            //Creamos orden en DB
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);

            itemsFromDB.map(async (item) => {
                const itemRef = doc(db, "funkos", `${item.id}`);
                await updateDoc(itemRef, {
                    stock: increment(-item.quantity)
                });
            });
            Swal.fire(
                'Great!',
                'Thanks for your purchase',
                'success'
            )
        }
        
        ctx.clear();
        
    }

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
                                        <div className="col ps-0 text-end"><span>$ {ctx.taxes().toFixed(2)}</span></div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col ps-0 fw-bold fs-3">TOTAL</div>
                                        <div className="col ps-0 text-end"><span className="fw-bold fs-3">$ {ctx.total()}</span></div>
                                    </div>
                                </div>
                                <button onClick={ createOrder } className="btn btn-dark rounded-0 w-100">CHECKOUT</button>                                
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