import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import Loading from './Loading';


export default function FeaturedProduct() {

  const [product,setProduct] = useState([]);
  const [errMsg,setErrMsg] = useState(false);
  const [loading,setLoading] = useState(false)

  async function getCat() {
    setLoading(true)
    try {
      let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
      setProduct(data.data);
      setErrMsg('')
    } catch (error) {
      setErrMsg(error.message);
      
    }

  }

  useEffect(()=>{
    getCat()
  },[])

  return (
    <div className='container'>
      <div className="flex flex-wrap">
        {product.length?product.map((prod)=> <ProductItem key={prod._id} prod={prod}></ProductItem>):<Loading/>}
      </div>
    </div>
  )
}
