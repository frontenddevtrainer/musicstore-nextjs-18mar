"use client"

import { useSelector } from "react-redux"

import { useThemeContext } from "@/app/context/theme";
import { AppState } from "@/lib/store";
// import useCart from "@/app/hooks/useCart";

const Header = () => {

    const items = useSelector((store: AppState) => {
        const { cart } = store;
        const { items } = cart;
        return items
    })

    // const { items } = useCart()
    const { toggleTheme, theme } = useThemeContext()

    return <header className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
        Music Store
        Cart : {items.length}
        <button onClick={toggleTheme}>{theme}</button>
    </header>
}

export default Header;