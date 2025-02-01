import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useCart } from "../context/CartContext";


const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { cart } = useCart();
 

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>


     
    <div className="px-[5vw] py-[4vh] relative">
      <div className="    flex justify-between items-center">
        <Link to="/home">
          <p className="text-3xl font-[Montserrat]">Storify</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link to="/products">
            <p className="text-lg font-[Exo]">Store</p>
          </Link>
          <Link to="/contact">
            <p className="text-lg font-[Exo]">Contact</p>
          </Link>
          <Link to="/cart">
            <TiShoppingCart className="text-2xl" />
            <p className="absolute top-[30%] left-[95%] text-md">{cart.length}</p>
          </Link>
        </div>

        

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden absolute top-[11vh] left-[5vw]  bg-[#B2A5FF] p-6 flex flex-col items-center gap-[3rem]  shadow-lg w-[90%] text-white z-1">
            <Link to="/products" onClick={handleMenu}>
              <p className="text-lg font-[Exo] border-b-4">Store</p>
            </Link>
            <Link to="/contact" onClick={handleMenu}>
              <p className="text-lg font-[Exo] border-b-4">Contact</p>
            </Link>
            <Link to="/cart" onClick={handleMenu}>
              <TiShoppingCart className="text-2xl border-b-4" />
              <p className="absolute top-[75%] left-[52%] text-md">{cart.length}</p>
            </Link>
          </div>
        )}

        {/* Burger Menu Icon */}
        <div className="block md:hidden text-2xl cursor-pointer" onClick={handleMenu}>
          {showMenu ? <RxCross2 /> : <IoMdMenu />}
        </div>
      </div>
    </div>

    
    </>
  );
};

export default Navbar;
