import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce ((total , item) => total + (item.price * item.quantity) , 0)




  return (
    <div className="px-[5vw] py-[3vh] min-h-[90vh]">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>

      ) : (

        <div className="flex flex-col gap-4 mt-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <img src={`/${item.image_path}`} className="w-16 h-16 object-cover" />
              <p>{item.name}</p>
            
              <p>€ {item.price} x {item.quantity}</p>
              <button className="text-red-500 text-l" onClick={() => removeFromCart(item.id)}>Remove</button>
           
           
            </div>

            
          ))}

        </div>

      )}
      

  <div className="flex  justify-between py-[2vh]">
      <p className="font-[Exo] text-xl py-[0.7rem] ">Total :  € {totalPrice.toFixed(2)}</p>
     {cart.length === 0 ? ( <button className='hidden px-[1.7rem] py-[0.7rem] text-white  rounded-4xl cursor-pointer bg-[#B2A5FF]'>Checkout</button>) : ( <button className=' px-[1.7rem] py-[0.7rem] text-white  rounded-4xl cursor-pointer bg-[#B2A5FF]'>Checkout</button>)}
  </div>
    
    </div>
  );
};

export default Cart;
