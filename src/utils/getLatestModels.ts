import { Product } from '../types/typeGadget';

export const getLatestModels = (models: Product[]) => {
  const years = new Set<number>();

  models.forEach(model => {
    years.add(model.year);
  });

  const lastYears: number[] = Array.from(years.keys());
  const lastYear = Math.max(...lastYears);

  return [...models].filter(model => model.year === lastYear);
};
