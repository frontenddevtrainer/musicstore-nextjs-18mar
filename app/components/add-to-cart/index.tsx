import useCart from "@/app/hooks/useCart";

const AddToCart = () => {
    const { addToCart } = useCart()
    return <button onClick={() => { addToCart({ name: Math.random() }) }}>Add to Cart</button>
}

export default AddToCart;