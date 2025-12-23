import { Breadcrumbs } from '../Breadcrumbs';
import './TabletPage.scss';
import { Catalog } from '../Catalog';
import { useEffect, useState } from 'react';
import { getProducts } from '../../api/getProducts';
import { Product } from '../../types/typeGadget';
import { useAppSelector } from '../../types/hooks';

export const TabletPage = () => {
  const products = useAppSelector(state => state.products.products);
  const [phones, setPhones] = useState<Product[] | []>([]);

  useEffect(() => {
    if (!products.length) {
      (async () => {
        try {
          const data = await getProducts();

          if (data !== null) {
            setPhones(data.filter(product => product.category === 'tablets'));
          }
        } catch {
          throw new Error();
        }
      })();
    } else {
      setPhones(products.filter(product => product.category === 'tablets'));
    }
  }, [products]);

  return (
    <section id="tabletPage" className="content">
      <Breadcrumbs />
      <Catalog gadgets={phones} gadgetType="Tablets" />
    </section>
  );
};
