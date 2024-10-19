import { getIndividualProduct } from '@/sanity/lib/individualProduct'
import { Product } from '@/sanity/schemaTypes/product'
import React, { FC } from 'react'


type Props = {
    params: { product:string };
  };

const productDetails:FC<Props> = async ({ params }) => {

    const product:Product = await getIndividualProduct(params.product)

  return (
    <div className='relative top-[100px] text-black' >
      
    </div>
  )
}

export default productDetails