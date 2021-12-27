export type Product = {
  id: number;
  name: string;
  price: number;
  available: number;
};

export type Products = Product[];

export type ProductInCart = Product & {
  isInCart: boolean;
  quantity: number;
};

export type ProductsInCart = ProductInCart[];
