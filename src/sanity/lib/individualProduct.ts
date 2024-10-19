import { groq } from "next-sanity";

import { client } from "./client";

export async function getIndividualProduct(title:string) {
  const query = groq`*[_type == "product" && title == "${title}"]`;

  const individualProduct = await client.fetch(query);
  console.log('individualProduct')
  return individualProduct[0];
}
