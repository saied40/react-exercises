import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './data';

export default function ProductDetails() {
  const { productSlog } = useParams();
  const product = data.find(p => p.slog === productSlog);

  // const zoomStart = (e) => {
  //   const x = ((e.clientX - e.target.offsetLeft) / e.target.offsetWidth * 100).toFixed(0);
  //   const y = ((e.clientY - e.target.offsetTop) / e.target.offsetHeight * 100).toFixed(0);

  //   e.target.style.backgroundSize = "200%";
  //   e.target.style.backgroundPosition = `${x}% ${y}%`;
  // };

  const handleZoomEnd = (e) => {
    e.target.style.backgroundSize = "100%";
    e.target.style.backgroundPosition = "50% 50%";
  };
  const handleMouseMove = (e) => {
    const x = ((e.clientX - e.target.offsetLeft) / e.target.offsetWidth * 100).toFixed(0);
    const y = ((e.clientY - e.target.offsetTop) / e.target.offsetHeight * 100).toFixed(0);

    e.target.style.backgroundSize = '300%';
    e.target.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <div className="m-8 flex flex-col items-start gap-4">
      <h1 className="text-5xl font-semibold">{product.name}</h1>
      <p className="text-xl font-medium text-gray-400">
        {product.description} + Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laborum placeat minus magnam doloremque! Sequi odio
        consequuntur ut tempore natus porro cupiditate distinctio veniam
        obcaecati repellat nulla, nobis voluptate, praesentium in!
      </p>
      <div className="grid-parent my-4">
        {product.images.map((img, i) => (
          <div
            className="grid-child h-60 bg-no-repeat transition-all duration-300 bg-center bg-[length:100%]"
            style={{ backgroundImage: `url(${img})` }}
            key={i}
            onMouseEnter={handleMouseMove} //! no need for zoomStart() function
            onMouseLeave={handleZoomEnd}
            onMouseMove={handleMouseMove}
          >
            {/* <img src={img} alt={`${product.name} - ${i}`} className="" onMouseOver={mouseOver} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};
