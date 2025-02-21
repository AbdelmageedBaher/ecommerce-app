import React, { useEffect } from 'react'
import { useState } from 'react';
import  axios  from 'axios';
import SubCatData from './SubCatData';

let token = localStorage.getItem('token')

export default function DataCategory({category,id}) {
    
      let[CategoryId,setCategoryId]=useState({});

     async function getSubCategories(id){
        let data =await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,{
            headers:{token}
        })
        setCategoryId(data);
    }

useEffect(()=>{getSubCategories(id)},[])
console.log(CategoryId);

return (
<>
<div className='md:w-1/4 p-2'>
        <div className=' border-2 cursor-pointer' onClick={()=>{getSubCategories(id)}}>
            <img src={category.image} className='w-full h-[350px] object-cover' alt="" />
            <h2 className='p-2 text-[22px] text-center '>{category.name}</h2>
        </div>
        
 </div>
    <div>
    {CategoryId.length? CategoryId.map((category)=> <SubCatData category={category}/> ):''}
    </div>
    </>
  )
}
