import { Product } from '../types/typeGadget';

export const getUniqueModels = (
  models: Product[],
  key: keyof Product,
): Product[] | [] => {
  const set = new Set();
  const res = new Set<Product>();

  for (let i = 0; i < models.length; i++) {
    const model = models[i];

    set.add(model[key]);
  }

  for (let i = 0; i < models.length; i++) {
    const model = models[i];

    if (set.has(model[key])) {
      set.delete(model[key]);
      res.add(model);
    }
  }

  return Array.from(res);
};
