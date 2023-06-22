import React from 'react';
import bn1 from '../../assets/bn1.jpg'
import bn2 from '../../assets/bn2.jpg'
import bn3 from '../../assets/bn3.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-min">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={bn1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="text-red-600 text-xl p-5 hover:text-yellow-500">❮</a> 
      <a href="#slide2" className="text-red-600 text-xl p-5 hover:text-yellow-500">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={bn2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="text-red-600 text-xl px-3 hover:text-yellow-500">❮</a> 
      <a href="#slide3" className="text-red-600 text-xl px-3 hover:text-yellow-500">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={bn3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="text-red-600 text-xl px-3 hover:text-yellow-500">❮</a> 
      <a href="#slide4" className="text-red-600 text-xl px-3 hover:text-yellow-500">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={bn2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="text-red-600 text-xl px-3 hover:text-yellow-500">❮</a> 
      <a href="#slide1" className="text-red-600 text-xl px-3 hover:text-yellow-500">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;