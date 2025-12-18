import { useMemo } from 'react';
import { useAppSelector } from '../../types/hooks';
import './BrandModels.scss';
import { getLatestModels } from '../../utils/getLatestModels';
import { Devices } from '../Devices';
import { getUniqueModels } from '../../utils/getUniqueModels';

export const BrandModels = () => {
  const gadgets = useAppSelector(state => state.products.products);
  const latestModelsMemo = useMemo(() => getLatestModels(gadgets), [gadgets]);
  const uniqueModelsMemo = useMemo(
    () => getUniqueModels(latestModelsMemo, 'color'),
    [latestModelsMemo],
  );

  return (
    <section id="brandModels" className="brand__models">
      {
        <Devices
          title={'Brand new models'}
          devices={uniqueModelsMemo}
          isNew={true}
        />
      }
    </section>
  );
};
