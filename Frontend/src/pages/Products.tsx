import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface CategoryData {
    id :number ,
    name :string
}

interface ProductsData {
    id: number,
    name :string,
    description :string,
    price : string,
    image_path :string,
    category_name: string;
  }
  

const Products: React.FC =()=>{
    const [products ,setProducts] =useState<ProductsData[]>([]);
    const [category ,setCategory] =useState<CategoryData[]>([]);
    const [selectedCategory,setSelectedCategory]=useState<string>('');


    useEffect (()=>{
        axios.get ("http://localhost:8081/products")
        .then ((res) => 
        setProducts (res.data)
      )
      .catch ((err) =>{
        alert('error fetching products')
      })
    
      },[])

      useEffect (()=>{
        axios.get ("http://localhost:8081/categories")
        .then ((res) => {
            setCategory(res.data)
        })
        .catch ((err) => {
            alert ('Error Fetching Categories')
        })

      },[])


      const filteredProducts = products.filter (product =>  
        selectedCategory ? product.category_name === selectedCategory : true
      )
      

    return <>
    <div className="px-[5vw] py-[3vh] ">

    <div className='grid grid-cols-2 md:grid-cols-4 gap-[2rem] z-0' >
                  {category.map ((categories ) => (
                    <div key={categories.id}>
                      <button className={`px-3 py-3 rounded z-0 ${
        selectedCategory === categories.name ? "bg-[#B2A5FF] scale-110 text-white" : "bg-gray-200"
      }`} onClick={()=>setSelectedCategory(categories.name)}>{categories.name}</button>
                    </div>
                  ))}
                </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[2rem] h-[100%] cursor-pointer py-[3vh]">

            {filteredProducts.map((product) => (
                <Link key={product.id} to={`/details/${product.id}`} className="px-[1rem] py-[1rem]  rounded-3xl flex flex-col justify-center items-center">
                    <img src={product.image_path} className="w-[20rem]"/>
                    <p className="font-[Exo]">{product.name}</p>
                    <p className="text-red-600 font-[Exo]">€{product.price}</p>


                </Link>
            ))}

        </div>

    </div>
    </>
}
export default Products ;