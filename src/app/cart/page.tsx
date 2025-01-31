"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { removeFromCart, updateCartQuantity, getCartItems } from '../../utils/cartUtils';
import { toast } from "react-toastify"; // Import toast
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import 'react-toastify/dist/ReactToastify.css'; // Import styles for react-toastify

export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(allProducts);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleRemove = (id: string) => {
    // Show a confirmation alert
    const confirmRemoval = window.confirm("Are you sure you want to remove this item?");
    
    if (confirmRemoval) {
      // Remove the item from cart
      removeFromCart(id);
      
      // Update cart items in state
      setCartItems(getCartItems());
  
      // Show a success alert after removal
      alert("Item removed from your cart");
    }
  };
  

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    toast.info("Proceeding with your order...", {
      position: "top-center",
      autoClose: 3000,
      closeButton: true,
    });

    // Simulate order placement
    setTimeout(() => {
      toast.success("Your order has been successfully placed.", {
        position: "top-center",
        autoClose: 5000,
        closeButton: true,
      });
      setCartItems([]); // Clear cart
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="px-4 md:px-20 lg:px-32">
        {/* Header Section */}
        <div className="h-[200px] md:h-[320px] relative">
          <Image src="the2.png" className="w-full h-full object-cover" alt="Background" width={800} height={500} />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black">Cart</h2>
            <div className="flex text-black text-sm md:text-base pt-4">
              <span>Home</span>
              <Image src="/arrow.png" alt="Arrow" className="mx-2" width={10} height={10} />
              <span>Cart</span>
            </div>
          </div>
        </div>

        {/* Cart Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 py-12">
          <div className="w-full md:w-2/3">
            {/* Cart Items */}
            <div className="p-4 bg-[#F9F1E7] rounded-lg">
              <div className="hidden md:flex justify-between p-4 border-b">
                <h2 className="font-semibold text-sm text-black">Product</h2>
                <h2 className="font-semibold text-sm text-black">Price</h2>
                <h2 className="font-semibold text-sm text-black">Quantity</h2>
                <h2 className="font-semibold text-sm text-black">Subtotal</h2>
              </div>

              {cartItems.map((item) => {
                const matchedProduct = products.find((p) => p._id === item._id);
                return (
                  <div
                    key={item._id}
                    className="flex flex-col md:flex-row items-center justify-between py-4 border-b gap-4"
                  >
                    <div className="flex items-center space-x-4 w-full md:w-auto">
                      {matchedProduct?.productImage && (
                        <Image
                          src={urlFor(matchedProduct.productImage.asset._ref).url()}
                          alt={matchedProduct.title}
                          width={50}
                          height={50}
                          className="rounded-md"
                        />
                      )}
                      <h3 className="text-sm md:text-[16px] font-medium text-black">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-black text-sm md:text-base">Rs. {item.price.toLocaleString()}</p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item._id, item.inventory - 1)}
                        className="px-2 py-1 bg-gray-200 rounded text-black hover:bg-gray-300"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.inventory}
                        readOnly
                        className="w-12 border rounded-md text-center py-1 text-black"
                      />
                      <button
                        onClick={() => handleQuantityChange(item._id, item.inventory + 1)}
                        className="px-2 py-1 bg-gray-200 rounded text-black hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-black text-sm md:text-base">
                      Rs. {(item.price * item.inventory).toLocaleString()}
                    </p>
                    <button
  onClick={() => handleRemove(item._id)}
  className="text-red-500 hover:text-red-700"
>
  🗑️
</button>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart Totals */}
          <div className="w-full md:w-1/3 bg-[#F9F1E7] p-6 rounded-lg">
            <h2 className="text-center text-xl md:text-2xl font-bold text-black mb-6">
              Cart Totals
            </h2>
            <div className="flex justify-between py-2">
              <span className="text-black">Subtotal</span>
              <span className="text-[#9F9F9F]">Rs. {calculateTotal().toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-black">Total</span>
              <span className="text-[#B88E2F]">Rs. {calculateTotal().toLocaleString()}</span>
            </div>
            <button
              onClick={handleProceed}
              className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
