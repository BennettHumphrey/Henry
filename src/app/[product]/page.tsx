"use client";

import React, { FC, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { productsState } from "../Recoil";
import { Carousel } from "flowbite-react";
import { urlFor } from "@/sanity/lib/image";
import { Image, Product } from "@/sanity/schemaTypes/product";

type Props = {
  params: { product: string };
};

const ProductDetails: FC<Props> = ({ params }) => {
  const [products] = useRecoilState(productsState);
  const [currentColor, setCurrentColor] = useState<string>("Negro");
  const [uniqueColorImages, setUniqueColorImages] = useState<Image[]>([]);
  const [correctColorProducts, setCorrectColorProducts] = useState<Image[]>([]);

  const product = products.find((p) => p.path === params.product);

  useEffect(() => {
    if (product?.productImages) {
      console.log("product in [product]:", product);
      setCurrentColor(product.productImages[0].color);
      const getFirstImageForUniqueColors = (product: Product) => {
        const seenColors = new Set();
        return product.productImages.filter((imageObj: Image) => {
          if (!seenColors.has(imageObj.color)) {
            seenColors.add(imageObj.color);
            return true;
          }
          return false;
        });
      };

      setUniqueColorImages(getFirstImageForUniqueColors(product));
    }
  }, [product]);

  useEffect(() => {
    if (product?.productImages) {
      const getCorrectColorProducts = (product: Product, color: string) => {
        return product?.productImages.filter((imageObj: Image) => {
          if (imageObj.color === color) {
            return true;
          }
        });
      };
      setCorrectColorProducts(getCorrectColorProducts(product, currentColor));
    }
  }, [currentColor]);

  useEffect(() => {
    console.log("correctColorProducts: ", correctColorProducts);
  }, [correctColorProducts]);

  return (
    <div className="relative top-[100px] pb-52 text-black">
      {product ? (
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-around md:px-10">
          <div className="w-[90vw] h-[90vw] md:w-[60vw] md:h-[50vw] lg:w-[50vw] lg:h-[40vw] lg:max-w-[80vh]">
            <Carousel pauseOnHover slideInterval={6000}>
              {correctColorProducts.map((imageObj: Image, index) => (
                <div key={index} className="h-full w-full">
                  <img
                    className="w-full h-[85%] rounded-xl"
                    src={urlFor(imageObj.image).url() || ""}
                    alt={`Product image ${index}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="w-full px-8 flex flex-col sm:flex-row md:flex-col lg:flex-row lg:items-start lg:px-5 md:w-[40vw] md:pl-0 pr-4 items-center justify-around">
            <div>
              <h2 className="font-bold text-3xl pb-4 -ml-3">{product.title}</h2>
              <p className="pb-8">
                <span className="font-bold mr-8">Precio:</span>
                S/ {product.price}
              </p>
              <h3 className="pb-4">
                <span className="underline">Color</span>: {currentColor}
              </h3>
              <div className="flex flex-wrap gap-4 pb-8">
                {uniqueColorImages.map((imageObj: Image, index) => (
                  <div
                    className="w-16 h-16"
                    key={index}
                    onClick={() => setCurrentColor(imageObj.color)}
                  >
                    <img
                      src={urlFor(imageObj.image).url() || ""}
                      alt={`Color variant ${imageObj.color}`}
                      className="w-full h-full rounded-md"
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-3 pb-8">
                {product.availableSizes.map((size, index) => (
                  <div className="p-2 border border-black" key={index}>
                    <p>{size}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl underline tracking-wider">DESCRIPCIÓN</h3>
              <p className="pb-8">{product.description}</p>
              <h3 className="text-xl underline tracking-wider">FICHA TÉCNICA</h3>
              <p>{product.technicalInfo}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
