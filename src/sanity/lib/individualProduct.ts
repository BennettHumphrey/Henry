import { groq } from "next-sanity";

import { client } from "./client";

export async function getIndividualProduct(path:string) {
  const query = groq`*[_type == "product" && path == "${path}"]`;

  const individualProduct = await client.fetch(query);
  console.log('individualProduct in server func: ', individualProduct)
  return individualProduct[0];
}
