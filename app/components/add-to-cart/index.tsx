import useCart from "@/app/hooks/useCart";

const AddToCart = ({ item }: { item: any }) => {
    const { addToCart } = useCart()
    return <button onClick={() => { addToCart(item) }}>Add to Cart</button>
}

export default AddToCart;