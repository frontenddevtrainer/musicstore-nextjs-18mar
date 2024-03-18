"use client"

import useCart from "@/app/hooks/useCart";

const Header = () => {

    const { items } = useCart()

    return <header>
        Music Store
        Cart : {items.length}
    </header>
}

export default Header;