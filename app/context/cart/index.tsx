"use client"

import { createContext, useState } from "react";

const CartContext = createContext<{ items: any[], addToCart(item: any): void }>({ items: [] });

const { Provider } = CartContext


const CartProvider = ({ children }: { children: any }) => {
    const [items, setItems] = useState<any[]>([]);

    const addToCart = (item: any) => {
        setItems([...items, item])
    }
    return <Provider value={{ items, addToCart }}>{children}</Provider>

}

export {
    CartProvider,
    CartContext
}