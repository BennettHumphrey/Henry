import { defineField, defineType } from "sanity";

export interface Product {
  title: string;
  path: string;
  description: string;
  productImages: { asset: { _ref: string; _type: string } }[];
  price: number;
  availableSizes: string[];
  technicalInfo: string;
}



export const productSchema = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Producto',
      description: 'El nombre del producto.',
      type: 'string',
    }),
    defineField({
      name: 'path',
      title: 'Ruta del Producto',
      description: 'La ruta no puede tener espacios ni mayúsculas.',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción del Producto',
      description: 'Una descripción detallada del producto.',
      type: 'text',
    }),
    defineField({
      name: 'productImages',
      title: 'Imágenes del Producto',
      description: 'Agrega imágenes para el producto.',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      description: 'El precio del producto.',
      type: 'number',
    }),
    defineField({
      name: 'availableSizes',
      title: 'Tamaños Disponibles',
      description: 'Lista de tamaños disponibles para el producto.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'technicalInfo',
      title: 'Información Técnica',
      description: 'Detalles técnicos adicionales sobre el producto.',
      type: 'string',
    }),
  ],
});
