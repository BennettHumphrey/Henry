// app/page.tsx (or Home.tsx)
'use client';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getProducts } from '@/sanity/lib/products';
import { Product } from '@/sanity/schemaTypes/product';
import Link from 'next/link';
import { productsState } from './Recoil';

export const getRandomCat = () => {
  return Math.floor(Math.random() * 41) + 800;
};

const Home = () => {
  const [products, setProducts] = useRecoilState(productsState);




  useEffect(() => {
    console.log('products recoil state: ', products)
  }, [products])

  return (
    <div className="top-[100px] relative pb-20">
      <h2 className="fold-bold tracking-widest text-center text-3xl md:text-5xl pb-10">
        NUESTROS PRODUCTOS
      </h2>
      <div className="flex flex-col gap-5 px-6 justify-center flex-wrap sm:flex-row">
        {products.map((product: Product, index: number) => (
          <div
            className="flex flex-col justify-center items-center relative"
            key={index}
          >
            <Link
              href={`/${product.path}`}
              className="bg-accent group relative flex items-center rounded-lg justify-center w-[90vw] h-[90vw] sm:w-[40vw] sm:h-[40vw] md:w-[28vw] md:h-[28vw] lg:w-[20vw] lg:h-[20vw]"
            >
              <img
                src={`https://placecats.com/${getRandomCat()}/${getRandomCat()}`}
                alt="Main Product Image"
                className="absolute inset-0 m-auto h-[90%] w-[90%] rounded-md group-hover:scale-110 group-hover:rounded-lg duration-300"
              />
              <div className="absolute inset-0 w-[90%] h-[90%] m-auto z-10 bg-gray-800 opacity-0 group-hover:opacity-40 group-hover:w-full group-hover:h-full duration-300 rounded-lg" />
              <div className="absolute inset-0 w-full h-full flex justify-center items-center">
                <p className="text-2xl text-text-light opacity-0 z-20 group-hover:opacity-100 duration-500">
                  Detalles
                </p>
              </div>
            </Link>
            <h3 className="text-start w-full pl-8">{product.title}</h3>
            <p className="text-start w-full pl-8">
              Precio: <span className="font-bold">S/ {product.price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
