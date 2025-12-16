// import { Phone } from '../../slices/gadgets';
import { TitleNotification } from '../TitleNotification';
import './Catalog.scss';
import { Dropdown } from '../Dropdown';
import { Gadget } from '../../types/typeGadget';
import { Card } from '../Card';

type Props = {
  gadgets: Gadget[];
  gadgetType: string;
};

export const Catalog: React.FC<Props> = ({ gadgets, gadgetType }) => {
  return (
    <section className="catalog">
      <TitleNotification title={gadgetType} typeNotification={'market'} />
      <div className="catalog__qty">
        <p className="catalog__qty-text">{gadgets.length} models</p>
      </div>
      <div className="catalog__filter">
        <div className="catalog__filter-item catalog__filter-item--sort">
          <p className="catalog__filter-title">Sort by</p>
          <Dropdown options={['Newest', 'Cheaper', 'Expensive']} />
        </div>
        <div className="catalog__filter-item catalog__filter-item--slice">
          <p className="catalog__filter-title">Items on page</p>
          <Dropdown options={[8, 16, 24, 32]} />
        </div>
      </div>

      <section className="catalog__gadgets">
        {gadgets.map(gadget => (
          <Card device={gadget} onCatalog={true} key={gadget.id} />
        ))}
      </section>
    </section>
  );
};
