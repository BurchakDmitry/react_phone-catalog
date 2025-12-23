// import { useEffect, useState } from 'react';
// import { useAppSelector } from '../../App';
import { Breadcrumbs } from '../Breadcrumbs';
import './PhonePage.scss';
import { Catalog } from '../Catalog';
import { useEffect, useState } from 'react';
import { getProducts } from '../../api/getProducts';
import { Product } from '../../types/typeGadget';

export const PhonePage = () => {
  const [phones, setPhones] = useState<Product[] | []>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();

        if (data !== null) {
          setPhones(data.filter(product => product.category === 'phones'));
        }
      } catch {
        throw new Error();
      }
    })();
  }, []);

  return (
    <section id="phonePage" className="content">
      <Breadcrumbs />
      <Catalog gadgets={phones} gadgetType="Phones" />
    </section>
  );
};
