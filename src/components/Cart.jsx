import React, { useContext, useState } from 'react'
import useQueryCart, { getCarts } from './useQueryCart'
import useMutationCart, { clearItem, deleteItem, updateItem } from './useMutationCart';
import img1 from '../assets/images/light-patten.svg'
import Payment from './Payment';
import { Helmet } from 'react-helmet';
import { numItem } from './Context/NumCartItems';
import Loading from './Loading';


export default function Cart() {
  
  let {data,isLoading} = useQueryCart(getCarts);
  let {mutate,isPending} = useMutationCart(deleteItem);
  let {mutate:mutated,isPending:isPendingClear} = useMutationCart(clearItem);
  let {mutate:mutatedUpdate,isPending:isPendingUpdate} = useMutationCart(updateItem);
  let [isOpen,setOpen] = useState(false);
  let {setCartNum} = useContext(numItem);

  if(!data?.data?.numOfCartItems){
    return <div className='container w-full h-full object-cover'>
      <img src={img1} alt="" />
    </div>
  }

  setCartNum(data?.data?.numOfCartItems)

 if(isLoading||isPending||isPendingClear||isPendingUpdate)
  return <Loading/>
 
  
  return (
    

<div className="w-3/4 mx-auto py-20 relative overflow-x-auto  sm:rounded-lg">
<Helmet>
                <meta charSet="utf-8" />
                <title>cart</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
   <div className="flex justify-between my-10 py-4 px-3 shadow-lg rounded-lg">
   <h2 className='font-bold '>Numbers Of Cart Items : <strong className='text-main-color'>{data?.data?.numOfCartItems}</strong></h2>
   <h1 className=' font-bold'>Numbers Of Cart Items : <strong className='text-main-color font-extrabold'>{data?.data?.data?.totalCartPrice} </strong> EGY</h1>

   </div>

  <table className="w-full  shadow-lg text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {data?.data?.data?.products.map((prod)=>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img src={prod?.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {prod?.product?.title}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <button onClick={()=>{mutatedUpdate({productId:prod?.product?._id,count:prod?.count-1})}} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
            </svg>
          </button>
          <div>
            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={prod?.count} required />
          </div>
          <button onClick={()=>{mutatedUpdate({productId:prod?.product?._id,count:prod?.count+1})}} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {prod?.price} EGY
      </td>
      <td className="px-6 py-4">
        <a href="#" onClick={()=>{mutate(prod?.product?._id)}} className="font-medium dark:text-red-500 hover:bg-red-700 bg-red-600 p-3 rounded-lg text-white">Remove <i className='fa-solid fa-trash'></i></a>
      </td>
    </tr>
      )}

    </tbody>
  </table>
    <div className='container flex justify-between'>
    <a href="#" onClick={mutated} className="font-medium w-[300px] my-12 mx-auto dark:text-red-500 hover:bg-green-600 bg-main-color p-3 rounded-lg text-white text-center">Clear Data <i className='fa-solid fa-trash'></i></a>
    <a href="#" onClick={()=>setOpen(true)} className="font-medium w-[300px] my-12 mx-auto dark:text-red-500 hover:bg-blue-700 bg-blue-600 p-3 rounded-lg text-white text-center">Pay Online  <i class="fa-regular fa-credit-card fa-lg"></i></a>
    </div>
    {isOpen?<Payment cartId={data?.data?.cartId}/>:''}
  </div>

  )
}
