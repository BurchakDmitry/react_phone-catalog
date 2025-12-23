import { Breadcrumbs } from '../Breadcrumbs';
import './AccessoriesPage.scss';
import { Catalog } from '../Catalog';
import { useEffect, useState } from 'react';
import { getProducts } from '../../api/getProducts';
import { Product } from '../../types/typeGadget';
import { useAppSelector } from '../../types/hooks';

export const AccessoriesPage = () => {
  const products = useAppSelector(state => state.products.products);
  const [phones, setPhones] = useState<Product[] | []>([]);

  useEffect(() => {
    if (!products.length) {
      (async () => {
        try {
          const data = await getProducts();

          if (data !== null) {
            setPhones(
              data.filter(product => product.category === 'accessories'),
            );
          }
        } catch {
          throw new Error();
        }
      })();
    } else {
      setPhones(products.filter(product => product.category === 'accessories'));
    }
  }, [products]);

  return (
    <section id="accessoriesPage" className="content">
      <Breadcrumbs />
      <Catalog gadgets={phones} gadgetType="Accessories" />
    </section>
  );
};
