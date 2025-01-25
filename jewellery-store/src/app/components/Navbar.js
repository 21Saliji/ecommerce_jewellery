import { useState } from "react";
import { ShoppingCartIcon, MenuIcon } from "@heroicons/react/outline";

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-serif">SALIJI x FXG</h1>
      <div className="flex gap-4">
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </button>
        <a href="/cart">
          <ShoppingCartIcon className="w-6 h-6" />
          <span className="text-sm text-black-500">{cartCount}</span>
        </a>
      </div>
      {menuOpen && (
        <div className="absolute right-4 top-12 bg-white shadow-md p-3">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

