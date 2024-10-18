import { urlFor } from "@/sanity/lib/image";
import { getProducts } from "@/sanity/lib/products";
import { Product } from "@/sanity/schemaTypes/product";
import React from "react";

const Home = async () => {
  const products: Product[] = await getProducts();

  const getRandomCat = () => {
    return Math.floor(Math.random() * 41) + 800;
  }

  return (
    <div className="top-[100px] relative">
      <h2 className="fold-bold tracking-widest text-center text-3xl pb-10">NUESTROS PRODUCTOS</h2>
      <div className="flex flex-col gap-5 px-6">
        {products.map((product: Product, index: number) => (
          <div className="flex flex-col justify-center items-center relative w-[90vw] h-[100vw]" key={index}>
            <div className="bg-accent relative flex items-center justify-center w-[90vw] h-[90vw]">
              <img
                // src={urlFor(product.productImages[0]).toString()}
                src={`https://placecats.com/${getRandomCat()}/${getRandomCat()}`}
                className="absolute inset-0 m-auto h-[90%] w-[90%]"
              />
            </div>
            <h3 className="text-start w-full pl-8" >{product.title}</h3>
            <div className="h-px w-4/5 bg-gray-300" />
            <p className="text-start w-full pl-8" >Precio: <span className="font-bold" >S/ {product.price}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
