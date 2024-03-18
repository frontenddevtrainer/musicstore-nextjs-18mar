import { CartContext } from "@/app/context/cart"
import { useContext } from "react"

const CartList = () => {
    const { items } = useContext(CartContext)
    return <ul>
        {items?.map((item) => {
            return <li>{item.name}</li>
        })}
    </ul>
}

export default CartList;