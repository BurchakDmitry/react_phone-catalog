// import { useEffect, useState } from 'react';
// import { useAppSelector } from '../../App';
import { Breadcrumbs } from '../Breadcrumbs';
import './PhonePage.scss';
import { Catalog } from '../Catalog';
import { useMemo } from 'react';
import { useAppSelector } from '../../types/hooks';

export const PhonePage = () => {
  const products = useAppSelector(state => state.products.products);

  const phonesMemo = useMemo(
    () => [...products].filter(product => product.category === 'phones'),
    [products],
  );

  return (
    <section id="phonePage" className="content">
      <Breadcrumbs />
      <Catalog gadgets={phonesMemo} gadgetType="Phones" />
    </section>
  );
};
