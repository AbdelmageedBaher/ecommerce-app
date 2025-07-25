import React from 'react'
import { Link } from 'react-router-dom';
import useMutationCart, { addCart } from './useMutationCart';
import useMutationWish, { addCartWish } from './useMutationWish';
import toast from 'react-hot-toast';

export default function ProductItem({prod}) {

    let { imageCover,id,price,ratingsAverage,title,priceAfterDiscount,category } = prod;
    let {mutate:mutated,isSuccess:successWish,isError:errorWish} = useMutationWish(addCartWish);

    let {data,mutate,isError,isSuccess} = useMutationCart(addCart)

   if(isSuccess||successWish)
   toast.success("Added successfully");
   if(isError||errorWish)
   toast.error('Please Register and Login First');

  return (

      <div className="product p-2 cursor-pointer lg:w-1/5 md:w-1/4 sm:1/2 ">
      <Link to={`/productdetails/${id}/${category._id}`} >
        <img src={imageCover} className='w-full' alt="" />
        <h6 className='text-main-color text-sm font-semibold py-1'>{category.name}</h6>
        <h6>{title}</h6>
        <div className='flex justify-between pb-10'>
            <div>
                <p className={priceAfterDiscount?'line-through':''}>{price} EGY</p>
                <p>{priceAfterDiscount?priceAfterDiscount+'EGY':''}</p>
            </div>
            <span><i className="fa-solid fa-star text-rating-color" /> {ratingsAverage}</span>

        </div>
      </Link>
            <div onClick={()=>{mutate(id)}} className="btn bg-main-color w-[6rem] my-3 mx-auto ">add to cart</div>
            <i onClick={()=>{mutated(id)}}  class={`fa-solid fa-heart fa-xl mb-4 mr-2 float-right hover:text-red-700`}></i>
    </div>
  )
}
