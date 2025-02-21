import React from 'react'
import useMutationWish, { deleteItemWish } from './useMutationWish'
import useQueryWish, { getWislList } from './useQueryWish';
import { Helmet } from 'react-helmet';
import useMutationCart, { addCart } from './useMutationCart';
import Loading from './Loading';

export default function WishList() {
 
    let {mutate,isPending:addPend} = useMutationCart(addCart)
    let {mutate:muteded,isPending} = useMutationWish(deleteItemWish);
    let {data,isLoading} = useQueryWish(getWislList);

    if(isLoading||isPending||addPend)
        return <Loading/>
    

    return (
    <div className=''>
      <div className="w-3/4 mx-auto py-20 relative overflow-x-auto  sm:rounded-lg">
            <Helmet>
                <meta charSet="utf-8" />
                <title>wishlist</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  
   </div>

  <table className="w-full  shadow-lg text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 container">
    
    <tbody>
      {data?.data?.data?.map((prod)=>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img src={prod?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {prod?.product?.title}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {prod?.price} EGY
      </td>
      <td className="px-6 py-4">
        <a href="#" onClick={()=>{muteded(prod?.id)}} className="font-medium dark:text-white hover:bg-red-700 bg-red-600 p-3 rounded-lg text-white">Remove <i className='fa-solid fa-trash'></i></a>
      </td>
      <td className="px-6 py-4">
        <a href="#" onClick={()=>{mutate(prod?.id)}} className="font-medium dark:text-red-500 hover:bg-green-600 bg-main-color p-3 rounded-lg text-white">Add Cart <i class="fa-solid fa-plus"></i></a>
      </td>
    </tr>

      )}
      
    </tbody>
  </table>
    
    
</div>

  )
}
