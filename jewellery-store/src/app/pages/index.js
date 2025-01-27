import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductsList";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import Footer from "../components/Footer";

export default function Home () {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const updatedCart = [...cart,, product];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div>
            <Navbar cartCount={cart.length} />
            <ProductList addToCart={addToCart} />
            <Hero />
            <Collections />
            <Footer />
        </div>
    );
}

