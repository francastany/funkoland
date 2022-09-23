import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => { //Renderizado de Componentes Hijos
    const [cartList, setCartList] = useState([])
    
    const isInCart = (id) => {
        return cartList.some(item => item.id === id);
    }

    const addItem = (product, qty) => {
        if(isInCart(product.id)){
            product.quantity = product.quantity + qty
        } else {
            product.quantity = qty;
            setCartList([...cartList, product]);
        }
    }
    
    const clear = () => {
        setCartList([])   
    }
    
    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }
    
    const cartQty = () => {
        let arrayQty = cartList.map(item => item.quantity)
        return arrayQty.reduce((acc, item) => acc + item, 0)
    }

    const subtotal = () => {
        let arrayTotals = cartList.map(item => item.quantity * item.price)
        return arrayTotals.reduce((acc, item) => acc + item, 0)
    }

    const taxes = () => {
        return subtotal() * 0.1
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            addItem, 
            clear, 
            removeItem, 
            isInCart, 
            cartQty,
            subtotal,
            taxes
            }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;