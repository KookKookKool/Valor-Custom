import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import ProductCarousel from '../src/ProductsSlider/ProductCarrousel';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: '',
  },
  {
    id: 2,
    name: 'Product 2',
    image: '',
  },
  {
    id: 3,
    name: 'Product 3',
    image: '',
  },
  {
    id: 4,
    name: 'Product 4',
    image: '',
  },
  {
    id: 5,
    name: 'Product 5',
    image: '',
  },
  {
    id: 6,
    name: 'Product 6',
    image: '',
  },
  {
    id: 7,
    name: 'Product 7',
    image: '',
  },
  {
    id: 8,
    name: 'Product 8',
    image: '',
  },
  // เพิ่มสินค้าอื่น ๆ ต่อไป...
];

export default function Home() {
  return (
    <>
      <div className="video-container">
        <Link to="/main">
          <video className="Video" autoPlay loop muted playsInline>
            <source src="/SQ1_2.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>

      <div>
        <ProductCarousel products={products} />
      </div>
    </>
  );
}
