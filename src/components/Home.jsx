import React from 'react'
import FeaturedProduct from './FeaturedProduct'
import HeaderSlider from './HeaderSlider'
import CatItem from './CatItem'
import { Helmet } from 'react-helmet'


export default function Home() {
  return (
    <div className='pt-16'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <HeaderSlider/>
      <CatItem/>
      <FeaturedProduct/>
    </div>
  )
}

