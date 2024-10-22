import { defineField, defineType } from "sanity";

export interface Product {
  title: string;
  path: string;
  description: string;
  productImages: {
    image: { asset: { _ref: string; _type: string } };
    color: string;
  }[];
  price: number;
  availableSizes: string[];
  technicalInfo: string;
}

export interface Image {
  image: { asset: { _ref: string; _type: string } };
    color: string;
}




export const productSchema = defineType({
  name: 'product',
  title: 'Productos',
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
      description: 'Que veas en el barra de direcciones arriba. No puede tener espacios ni mayúsculas.',
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
      description: 'Agrega imágenes para el producto con una descripción.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', type: 'image', title: 'Imagen' },
            { name: 'color', type: 'string', description: 'Mismos colores debe ser escrito exactamente igual', title: 'Color' },
          ],
        },
      ],
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
