import useCart from "@/app/hooks/useCart";


const CartList = () => {
    
    const { items } = useCart()

    return <ul>
        {items?.map((item) => {
            return <li>{item.name}</li>
        })}
    </ul>
}

export default CartList;