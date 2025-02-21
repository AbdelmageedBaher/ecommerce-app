import React from 'react'
import { Vortex } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className='container z-0 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center'>
 <Vortex
  visible={true}
  height="200"
  width="200"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />
    </div>
    
  )
}
