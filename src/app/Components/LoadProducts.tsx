"use client"

import React, { useEffect } from 'react'
import { productsState } from '../Recoil';
import { useRecoilState } from 'recoil';
import { Product } from '@/sanity/schemaTypes/product';
import { getProducts } from '@/sanity/lib/products';

const LoadProducts = () => {

    const [products, setProducts] = useRecoilState(productsState);



    useEffect(() => {
        // Fetch products and set the Recoil state
        const fetchProducts = async () => {
          const productsData: Product[] = await getProducts();
          setProducts(productsData);
        };
    
        fetchProducts();
      }, [setProducts]);



  return (
    <div></div>
  )
}

export default LoadProducts