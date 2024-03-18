"use client"

import { CartContext } from "@/app/context/cart";
import { useContext } from "react"

const Header = ()=>{

    const { items } = useContext(CartContext)

    return <header>
        Music Store
        Cart : {items.length}
    </header>
}

export default Header;