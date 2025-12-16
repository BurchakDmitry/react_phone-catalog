// import { useEffect, useState } from 'react';
// import { useAppSelector } from '../../App';
import { Breadcrumbs } from '../Breadcrumbs';
import './PhonePage.scss';
// import { Phone } from '../../slices/gadgets';
// import { Catalog } from '../Catalog';

export const PhonePage = () => {
  // const gadgets = useAppSelector(state => state.data.items);
  // const [phones, setPhones] = useState<Phone[] | null>(null);

  // useEffect(() => {
  //   const filteredGadegts = gadgets.filter(
  //     gadget => gadget.category === 'phones',
  //   );

  //   setPhones(filteredGadegts);
  // }, [gadgets]);

  return (
    <section id="phonePage" className="content">
      <Breadcrumbs />
      {/* {phones?.length && <Catalog gadgets={phones} gadgetType="Phones" />} */}
    </section>
  );
};
