import { CartContext } from "@/app/context/cart";
import { useContext } from "react";

const AddToCart = () => {

    const { addToCart } = useContext(CartContext)
    return <button onClick={() => { addToCart({ name: Math.random() }) }}>Add to Cart</button>
}

export default AddToCart;