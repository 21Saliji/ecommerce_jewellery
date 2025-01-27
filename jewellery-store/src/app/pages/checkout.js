const Checkout = () => {
    return (
        <div classname="p-4">
            <h2 classname="text-x1 font-bold">Checkout</h2>
            <p>Complete your purchase below:</p>
            <form classname="flex flex-col gap-3">
                <input type="text" placeholder="Name" classname="border p-2" />
                <input type="email" placeholder="Email" classname="border p-2" />
                <input type="text" placeholder="Shipping Address" classname="border p-2" />
                <button classname="bg-emerald-800 text-white px-4 py-2">Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;

