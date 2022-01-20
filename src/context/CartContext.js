import { createContext, useState, useEffect } from "react";

let cart = typeof window !== "undefined" ? localStorage.getItem('cart') : []

const CartContext = createContext({
    cart: typeof window !== "undefined" ? JSON.parse(localStorage.getItem('cart')) : [],
    removeItem: () => {},
    addItem: () => {},
    clearCart:() => {},
    count: 0
})

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState(typeof window !== "undefined" ? JSON.parse(localStorage.getItem('cart')) : []);
    
    const count = cart && cart.length || 0;

    const addItem = (item) => {
        
        let productObject = {
            id: item.id,
            title: item.title,
            price: item.price,
            qty: 1
        }

        // Si le panier est vide, on insère le nouvel objectif
        if(!cart) {
            setCart([productObject]);
            
        } else { // Si le panier est déjà remplit
            let indexOfExistingProduct = cart.findIndex(
                (el) => el.id === productObject.id
            )

            if(indexOfExistingProduct !== -1) {
                cart[indexOfExistingProduct].qty += 1
            } else {
                setCart([...cart, productObject]);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    const removeItem = (item) => {
        console.log(item);
        localStorage.removeItem('cart', item);
        console.log(cart);
    }
    
    const context = { cart, count, addItem, removeItem }
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
        return () => {
            localStorage.setItem("cart", JSON.stringify(cart))
        };
    }, [cart]);

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;