import { Product } from "@/sanity/schemaTypes/product";
import { atom } from "recoil";



export const productsState = atom({
    key: "products",
    default: [
        {
          title: "Loading...",
          description: "Loading..."
        },
        {
          title: "Loading...",
          description: "Loading..."
        },
      ] as Product[]
  });