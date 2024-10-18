import { groq } from "next-sanity";

import { client } from "./client";

export async function getProducts() {
  const query = groq`*[_type == "product"]`;

  const products = await client.fetch(query);

  return products;
}
