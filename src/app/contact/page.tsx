import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="bg-white text-black pt-12 px-6 lg:px-32">
      {/* Hero Image Section */}
      <div className="h-[320px] w-full relative">
        <Image src="/the2.png" className="w-full h-full object-cover" alt={''} width={1000} height={320} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-5xl font-bold text-black">Contact</h2>
          <div className="flex text-black text-base pt-4 pl-5 justify-center">
            <label>Home</label>
            <label><Image src='/arrow.png' alt="Arrow" className="mx-2" width={16} height={16} /></label>
            <label>Contact</label>
          </div>
        </div>
      </div>

      {/* Section: Get in Touch */}
      <div className="text-center mt-28">
        <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
        <p className="text-sm text-[#9F9F9F] leading-snug mt-4">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always<br /> Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Contact Information & Form */}
      <div className="flex flex-wrap justify-center pt-16 space-x-0 lg:space-x-24 px-6 lg:px-36">

        {/* Contact Info */}
        <div className="space-y-9 max-w-lg w-full lg:w-[393px]">
          <div className="mb-7">
            <div className="flex items-center">
              <FontAwesomeIcon 
                icon={faMapMarkerAlt} 
                className="text-2xl text-black mr-4 w-8 h-8 sm:w-6 sm:h-6" 
              />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p>236 5th SE Avenue, New York <br /> NY10000, United States</p>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center">
              <FontAwesomeIcon 
                icon={faPhone} 
                className="text-2xl text-black mr-4 w-8 h-8 sm:w-6 sm:h-6" 
              />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p>Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center">
              <FontAwesomeIcon 
                icon={faClock} 
                className="text-2xl text-black mr-4 w-8 h-8 sm:w-6 sm:h-6" 
              />
              <div>
                <h4 className="text-lg font-semibold">Working Time</h4>
                <p>Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-md w-full lg:w-[526px] pt-10">
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name</label>
              <input type="text" id="name" className="mt-1 block border w-full lg:w-[526px] h-[75px] border-[#9F9F9F] rounded-md shadow-sm p-3" placeholder="Abc" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" id="email" className="w-full lg:w-[526px] h-[75px] mt-1 block border border-[#9F9F9F] rounded-md shadow-sm p-3" placeholder="Abc@def.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" className="mt-1 block w-full lg:w-[526px] h-[75px] border border-[#9F9F9F] rounded-md shadow-sm p-3" placeholder="This is an optional" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                rows={4}  // Ensure rows is a number, not a string
                className="mt-1 block w-full lg:w-[526px] h-[120px] border border-[#9F9F9F] rounded-md shadow-sm p-3" 
                placeholder="Hi! I'd like to ask about"
              />
            </div>
            <div>
              <button type="submit" className="w-full lg:w-[237px] h-[55px] bg-[#B88E2F] text-white font-bold py-3 rounded-md">Submit</button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100 py-16">
        <div className="container px-6 lg:px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">

            {/* High Quality */}
            <div className="w-full md:w-1/4 p-4 text-center flex flex-col items-center">
              <div className="text-4xl mb-4">
                <Image src="/trophy.png" alt="Trophy Icon" className="mx-auto" width={50} height={50} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">High Quality</h3>
              <p className="text-gray-600">Crafted from top materials</p>
            </div>

            {/* Warranty Protection */}
            <div className="w-full md:w-1/4 p-4 text-center flex flex-col items-center">
              <div className="text-4xl mb-4 text-black">
                <Image src="/guarantee.png" alt="Guarantee Icon" className="mx-auto" width={50} height={50} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Warranty Protection</h3>
              <p className="text-gray-600">Over 2 years</p>
            </div>

            {/* Free Shipping */}
            <div className="w-full md:w-1/4 p-4 text-center flex flex-col items-center">
              <div className="text-4xl mb-4">
                <Image src="/shipping.png" alt="Shipping Icon" className="mx-auto" width={50} height={50} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Free Shipping</h3>
              <p className="text-gray-600">Order over 150$</p>
            </div>

            {/* 24/7 Support */}
            <div className="w-full md:w-1/4 p-4 text-center flex flex-col items-center">
              <div className="text-4xl mb-4">
                <Image src="/custom.png" alt="Support Icon" className="mx-auto" width={50} height={50} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">24/7 Support</h3>
              <p className="text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
