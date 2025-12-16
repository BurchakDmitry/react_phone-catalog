import './HomePage.scss';

import { BrandModels } from '../BrandModels';
import { Categories } from '../Categories';
import { HotPrices } from '../HotPrices';
import { SliderModule } from '../SliderModule';
import { TitleNotification } from '../TitleNotification';

export const HomePage = () => {
  return (
    <section id="homePage" className="content">
      <TitleNotification
        title={'Welcome to Nice Gadgets store!'}
        typeNotification={'home'}
      />
      <SliderModule />
      <BrandModels />
      <Categories />
      <HotPrices />
    </section>
  );
};
