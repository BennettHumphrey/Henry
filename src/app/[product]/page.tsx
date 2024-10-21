"use client"

import React, { FC, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { productsState } from "../Recoil";

type Props = {
  params: { product: string };
};

const ProductDetails: FC<Props> = ({ params }) => {

  const [products, setProducts] = useRecoilState(productsState);

  const product = products.find((p) => p.path === params.product);
  // console.log('product in [product]:', product)


  return (
    <div className="relative top-[100px] text-black">
      {product ? (
        <div>
          <p>{product.title}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
