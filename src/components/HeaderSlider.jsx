import Slider from "react-slick";
import img3 from '../assets/images/slider-image-1.jpeg';
import img2 from '../assets/images/slider-image-2.jpeg';
import img1 from '../assets/images/slider-image-3.jpeg';
import blog1 from '../assets/images/blog-img-1.jpeg';
import blog2 from '../assets/images/blog-img-2.jpeg';



export default function HeaderSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true
      };

  return (
    <div className="container pt-7 hidden md:flex">
        <div className="w-2/3">
        <Slider {...settings}>
          <img src={img1} className="h-[400px] object-cover" alt="" />
          <img src={img2} className="h-[400px] object-cover" alt="" />
          <img src={img3} className="h-[400px] object-cover" alt="" />
        </Slider>
        </div>
        <div className="w-1/3 ">
        <img src={blog1} className="h-[200px] w-full object-cover"  alt="" />
        <img src={blog2} className="h-[200px] w-full object-cover"  alt="" />
        </div>
    </div>
  )
}
