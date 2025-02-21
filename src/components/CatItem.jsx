import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShowCategory from './ShowCategory';
import Slider from 'react-slick';


export default function CatItem() {

    const[cats,setCats] = useState([]);

    async function getCat() {
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
        setCats(data.data);
        
    }

    useEffect(()=>{
        getCat();
    },[]);

    let settings = {
      dots:true,
      infinite: true,
      speed: 70,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay:true
    };

  return (
    <div className='container py-10 m-auto hidden md:block'>
      <Slider {...settings}>
      {cats.map(category=> <ShowCategory key={category._id} category={category}></ShowCategory>)}
      </Slider>
    </div>
  )
}
