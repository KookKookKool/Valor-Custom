import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../ProductsSlider/Style.css';

export default function ProductCarousel({ products }) {
  const groupedProducts = [];

  for (let i = 0; i < products.length; i += 4) {
    groupedProducts.push(products.slice(i, i + 4));
  }

  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
    >
      {groupedProducts.map((group, index) => (
        <div key={index} className="product-group">
          {group.map((product) => (
            <div key={product.id} className="product-slide">
              <img src={product.image} alt={product.name} />
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
}
