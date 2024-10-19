"use client"

import { getIndividualProduct } from "@/sanity/lib/individualProduct";
import { Product } from "@/sanity/schemaTypes/product";
import { Button } from "flowbite-react";
import React, { FC, useEffect, useState } from "react";

type Props = {
  params: { product: string };
};

const ProductDetails: FC<Props> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getIndividualProduct(params.product);
      setProduct(fetchedProduct);
      console.log('fetchedProduct:', fetchedProduct)
    };

    fetchProduct();
  }, [params.product]);

  return (
    <div className="relative top-[100px] text-black">
      {product ? (
        <div>
          <Button>Test</Button>
          <p>{product.title}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
