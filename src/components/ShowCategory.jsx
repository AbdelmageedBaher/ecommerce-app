import React from 'react'


export default function ShowCategory({category}) {


   

    return (
    <div> 
    <img src={category.image} className='h-[180px] w-full object-cover' alt="" />
    </div>
        
  )
}
