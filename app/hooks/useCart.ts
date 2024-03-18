import { CartContext } from "@/app/context/cart";
import { useContext } from "react";

const useCart = () => {
    return useContext(CartContext)
}

export default useCart