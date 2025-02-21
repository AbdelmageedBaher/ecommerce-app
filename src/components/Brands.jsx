import React from 'react'
import { Helmet } from 'react-helmet'
import useQueryBrends, { getBrands } from './useQueryBrands'
import BrandsCart from './BrandsCart';
import Loading from './Loading';

export default function Brands() {
  
  let{data,isLoading} = useQueryBrends(getBrands);

  console.log(data?.data?.data);
  
  if(isLoading)
    return <Loading/>

  return (
    <div className='pt-20'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>brands</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className='text-center text-3xl font-extrabold text-main-color'>All Brands</h1>
            <div className='pt-2 container flex flex-wrap'>
            {data?.data?.data.map((brand)=><BrandsCart brand={brand}></BrandsCart>)}
            </div>
      
    </div>
  )
}
