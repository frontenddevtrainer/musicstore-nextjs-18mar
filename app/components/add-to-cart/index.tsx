import { addToCart } from "@/lib/store/slices/cart";
import { useDispatch } from "react-redux"

// import useCart from "@/app/hooks/useCart";

const AddToCart = ({ item }: { item: any }) => {


    const dispatch = useDispatch();

    // const { addToCart } = useCart()
    return <button onClick={() => { dispatch(addToCart(item)) }}>Add to Cart</button>
}

export default AddToCart;