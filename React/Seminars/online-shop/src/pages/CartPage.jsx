import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from "../redux/cartSlice";

const CartPage = () => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Корзина</h1>
            {cart.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={(id) => dispatch(increaseQuantity(id))}
                    onDecrease={(id) => dispatch(decreaseQuantity(id))}
                />
            ))}
            <h2>Общая стоимость: ${total.toFixed(2)}</h2>
        </div>
    );
};

export default CartPage;
