import React from 'react'
import { Link } from 'react-router-dom';
import useMutationCart, { addCart } from './useMutationCart';
import toast from 'react-hot-toast';
import useMutationWish, { addCartWish } from './useMutationWish';

export default function ProductItem({prod}) {

    let { imageCover,id,price,ratingsAverage,title,priceAfterDiscount,category } = prod;
    let {mutate:mutated,isSuccess:successWish,isError:errorWish} = useMutationWish(addCartWish);

    let {data,mutate,error,isError,isSuccess} = useMutationCart(addCart)

   if(isSuccess||successWish)
   toast.success(data?.data?.message);
   if(isError||errorWish)
   toast.error(error?.message);

   function changeColor() {
    document.querySelector('.fa-regular').classList.add('text-main-color');
}
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
            <i onClick={()=>{mutated(id),changeColor}}  class={`fa-regular fa-heart fa-xl mb-4 mr-2 float-right`}></i>
    </div>
  )
}
