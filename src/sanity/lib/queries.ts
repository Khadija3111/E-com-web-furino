import { groq } from "next-sanity";


export const allProducts  = groq`*[_type =="product"]`;
export const four = groq`*[_type=="product"][0..7]`;
export const five = groq`*[_type=="product"][4..7]`;

  