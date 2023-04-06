import { createContext, useState } from "react";

export const CartContext = createContext()

export default function CartProvider( {children} ) {

    const [cart, setCart] = useState([])
    console.log(cart)

    const handleAddItem = (item) => {
        setCart([...cart, item])
        console.log(cart)
    }

    const isInCart = (id) => cart.some(prod => prod.id === id)

    const totalQuantity = () => {
        cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const totalPrice = () => {
       return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            handleAddItem,
            isInCart,
            totalQuantity,
            totalPrice,
            removeItem,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}