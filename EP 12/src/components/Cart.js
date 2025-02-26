import { useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems,"---Cart.js")

    const dispatch = useDispatch();

    const handelClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-4 p-4">
            <h1>Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer" onClick={handelClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1 className="text-black"> your Cart is empty, Add Items to the cart!!. <Link to={"/"} >click here</Link> </h1> }
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;