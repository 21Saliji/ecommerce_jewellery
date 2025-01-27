import { useEffect, useState } from "react";
import {db} from "../firebaseConfig";
import { db, collections, getDocs } from "firebase/firestore";

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collections(db, "products"));
            const productsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(productsData);
        };
        fetchProducts();
    }, []);

    return (
        <div classname="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <div key={product.id} classname="border p-2 text-center">
                    <img src={product.image} alt={product.name} classname="w-full h-40 object-cover" />
                    <h3 classname="text-lg">{product.name}</h3>
                    <p classname="text-black-500">R{product.price}</p>
                    <button onClick={() => addToCart(product)} classname="bg-white-500 text-black px-4 py-1 mt-2">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};
        
export default ProductList;
     