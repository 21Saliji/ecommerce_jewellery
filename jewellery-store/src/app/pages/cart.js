import { useState, useEffect } from "react";

const Cart = () => {
    const [cart, Setcart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        Setcart(savedCart);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        Setcart(updatedCart);
    };

    return (
        <div classname="p-4">
            <h2 classname="text-xl font-bold mb-4">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} classname="flex justify-between items-center border-b py-2">
                            <span>{item.name} = R{item.price}</span>
                            <button onClick={() => removeFromCart(item.id)} classname="text-red-500">Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button classname="bg-green-500 text-white px-6 py-2 mt-4">Proceed to Checkout</button>
        </div>
    );
};

export default Cart;

