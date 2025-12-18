import { Product } from '../types/typeGadget';

export const getProducts = async (): Promise<Product[] | []> => {
  try {
    const res = await fetch('/api/products.json');

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    return data;
  } catch (err) {
    return [];
  }
};
