"use client"

import * as React from 'react';
// import FilterBar from "../comonents/filterbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/product";
import { allProducts } from "@/sanity/lib/queries";
// import { addToCart } from "../addtocart/page";
import { addToCart } from "../../utils/cartUtils"
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';


export default function Shop(){
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);


  const handleAddToCart=(e:React.MouseEvent, product:Product)=>{
    e.preventDefault()
    addToCart(product)
    alert('ADDED TO CART SUCESSFULLY')
  }

  return(
    <>
      <div className="px-32 bg-white">
        <div className="h-[320px] w-[1440px] relative"> 
          <Image
            src="/the2.png"
            className="w-full h-full object-cover"
            alt={''}
            width={1440}
            height={320}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"> 
            <h2 className="text-5xl font-bold text-black">Shop</h2>
            <Image 
              className="w-[170px]" 
              src="/gr56.png" 
              alt={''} 
              width={170} 
              height={170} 
            />
          </div>
        </div>

        {/* <FilterBar></FilterBar> */}

        <div className="bg-white p-5">
          {/* Grid container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
            {product.map((product) => (
              <div
                key={product._id}
                className="relative w-full max-w-[285px] h-[466px] bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Link href={`/product/${product.slug?.current ?? 'default-slug'}`}>

                  {/* Product Image */}
                  {product.productImage && (
                    <Image
                      src={urlFor(product.productImage.asset._ref).url()}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="w-full h-[301px] object-cover"
                    />
                  )}
                  {/* Product Title */}
                  <h3 className="text-lg font-semibold text-[#3A3A3A]">{product.title}</h3>
                  {/* Product Price */}
                  <p className="text-sm font-bold text-black">Price: ${product.price}</p>
                </Link>
                
                {/* Optional Tags */}
                {product.tags && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Add to Cart Button */}
                <button
                  className="bg-[#B88E2F] hover:bg-[#ffc744] mt-1 text-white font-semibold py-2 px-6 rounded-lg shadow-md w-full sm:w-[250px] md:w-[200px] lg:w-[180px] transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#95a5a6]"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  ADD TO CART
                </button>

              </div>
            ))}
          </div>
        </div> 

        {/* The lay design */}  
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full md:w-1/4 p-4 text-center flex flex-col items-center">
                <div className="text-4xl mb-4">
                  <Image src="/trophy.png" alt="Trophy Icon" className="mx-auto" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">High Quality</h3>
                <p className="text-gray-600">Crafted from top materials</p>
              </div>

              <div className="w-full md:w-1/4 p-4 text-center flex flex-col items-center">
                <div className="text-4xl mb-4 text-black">
                  <Image src="/guarantee.png" alt="Guarantee Icon" className="mx-auto" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">Warranty Protection</h3>
                <p className="text-gray-600">Over 2 years</p>
              </div>

              <div className="w-full md:w-1/4 p-4 text-center flex flex-col items-center">
                <div className="text-4xl mb-4">
                  <Image src="/shipping.png" alt="Shipping Icon" className="mx-auto" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">Free Shipping</h3>
                <p className="text-gray-600">Order over 150$</p>
              </div>

              <div className="w-full md:w-1/4 p-4 text-center flex flex-col items-center">
                <div className="text-4xl mb-4">
                  <Image src="/custom.png" alt="Support Icon" className="mx-auto" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">24/7 Support</h3>
                <p className="text-gray-600">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
        {/* The lay design */}
      </div>
    </>
  )
}
