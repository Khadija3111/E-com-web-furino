import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Product {
  _id: string; // Unique ID from Sanity
  _type: "product"; // Sanity's type identifier
  title: string; // Product title
  description: string; // Product description
  price: number; // Product price
  inventory: number; // Available stock
  imageUrl: string; // Deprecated or direct URL field (can be removed if unused)
  productImage: { // Optional field for image object
    asset: {
      _ref: string; // Sanity asset reference ID
      _type: "image"; // Sanity's type identifier for images
    };
  };
  slug: {
    _type: "slug"; // Sanity's slug type identifier
    current: string; // URL-friendly identifier for the product
  };

  tags?: string[]; // Optional array of product tags
  image?: StaticImport; // Optional field for static imports in Next.js
}
