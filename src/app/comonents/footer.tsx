import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Company Info Section */}
        <div>
          <h3 className="font-semibold text-xl text-black pb-6">Funiro.</h3>
          <p className="text-gray-500 text-sm">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA.
          </p>
        </div>

        {/* Links Section */}
        <div>
  <h3 className="font-semibold text-lg text-gray-600 pb-6">Links</h3>
  <ul className="space-y-3">
    <li>
      <Link href="/" className="text-black hover:text-yellow-500">
        Home
      </Link>
    </li>
    <li>
      <Link href="/shop" className="text-black hover:text-yellow-500">
        Shop
      </Link>
    </li>
    <li>
      <Link href="/about" className="text-black hover:text-yellow-500">
        About
      </Link>
    </li>
    <li>
      <Link href="/contact" className="text-black hover:text-yellow-500">
        Contact
      </Link>
    </li>
  </ul>
</div>


        {/* Help Section */}
        <div>
          <h3 className="font-semibold text-lg text-gray-600 pb-6">Help</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-black hover:text-yellow-500">Payment option</a></li>
            <li><a href="#" className="text-black hover:text-yellow-500">Return</a></li>
            <li><a href="#" className="text-black hover:text-yellow-500">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold text-lg text-gray-600 pb-6">Newsletter</h3>
          <form className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:flex-1 bg-transparent border-b-2 border-black text-black focus:outline-none focus:border-yellow-500 placeholder-gray-500 py-2"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 sm:ml-4 border-b-2 border-black text-black focus:border-yellow-500 hover:text-yellow-500 py-1"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-12">
        &copy; 2024 Funiro. All rights reserved.
      </div>
    </footer>
  );
}
