import React from 'react'

export default function BrandsCart({brand}) {
  return (
    <div className='md:w-1/5 sm:w-1/2 p-2'>
      <div className='rounded-md hover:shadow-main-color hover:shadow-md border-2 cursor-pointer'>
      <img src={brand.image} className='w-full p-2'  alt="" />
      <h3 className='text-center'>{brand.name}</h3>
      </div>
    </div>
  )
}
