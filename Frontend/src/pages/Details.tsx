import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface ProductDetails {
    id : number ,
    name :string ,
    price : string ,
    description : string,
    image_path :string,
    quantity: number,
}

const Details : React.FC =()=>{
    const [details , setDetails] =useState<ProductDetails | null >(null);
    const { addToCart } = useCart()
 

    const { id } = useParams<{ id: string }>();

    useEffect(()=>{
        axios.get (`https://storify-2-0.onrender.com/products/${id}`)
        .then ((res) => {
            setDetails(res.data)
        })
        .catch ((err) => {
            alert(err)
        })

    },[id])
    // console.log(details?.image_path);


    return <>
    <div className="px-[5vw] py-[3vh] h-[90vh]">
        <div className="h-[100%] flex justify-start items-center">

          <div className="flex flex-col md:flex-row justify-around items-center w-[100%] gap-[3rem]">

              <img src={`/${details?.image_path}`} className="w-full max-w-[24rem] h-auto"/>

            <div className="flex flex-col gap-[2rem]">
                <p className="font-[Exo] text-xl">{details?.name}</p>
                <p className="font-[Exo] text-xl">€ {details?.price}</p>
                <p className="font-[Exo] text-xl"> {details?.quantity}</p>

                <button
              className="px-[1.7rem] py-[0.7rem] text-white bg-[#B2A5FF] rounded-4xl cursor-pointer"
              onClick={() => details && addToCart(details)}
            >
              Add to Cart
            </button>

            </div>

          </div>



        </div>

    </div>
    </>
}
export default Details;