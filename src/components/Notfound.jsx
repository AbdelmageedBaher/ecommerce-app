import React from 'react'
import notFoundImg from '../assets/images/error.svg';

export default function Notfound() {
  return (
    <div className='pt-20'>
      <img src={notFoundImg} className='w-full h-[60vh]' alt="" />
    </div>
  )
}
