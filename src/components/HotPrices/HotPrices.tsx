import './HotPrices.scss';

import { Devices } from '../Devices';
import { useAppSelector } from '../../types/hooks';
import { useMemo } from 'react';
import { getUniqueModels } from '../../utils/getUniqueModels';

export const HotPrices = () => {
  const products = useAppSelector(state => state.products.products);
  const uniqueModelsMemo = useMemo(
    () => getUniqueModels(products, 'color'),
    [products],
  );

  return (
    <section className="hot-prices">
      <Devices title={'Hot prices'} devices={uniqueModelsMemo} />
    </section>
  );
};
