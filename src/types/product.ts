export interface ProductImage {
  colorCode: string;
  id: number;
  url: string;
}

export interface ProductColor {
  name: string;
  code: string;
}

export interface ProductVariants {
  sizes: string[];
  colors: ProductColor[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  variants: ProductVariants;
  images: ProductImage[];
}
