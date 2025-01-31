'use client'

import { Product } from '../../../types/product';

export default function ProductList({ product }: { product: Product[] }) {
  const handleClick = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    if (cart[product.title]) {
      cart[product.title] = {
        ...cart[product.title],
        quantity: cart[product.title].quantity + 1,
      };
    } else {
      cart[product.title] = { ...product, quantity: 1 };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className='flex justify-center gap-4 flex-wrap'>
      {product.map((product) => (
        <div key={product.title} className='border rounded'>
          {/* <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
          /> */}
          <div className='flex justify-between p-2 items-center'>
            <p>{product.title}</p>
            <button
              onClick={() => handleClick(product)}
              className='p-3 border rounded'
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}