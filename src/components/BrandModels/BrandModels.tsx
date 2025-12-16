import './BrandModels.scss';
// import { Devices } from '../Devices';
// import { useAppSelector } from '../../App';

export const BrandModels = () => {
  // const gadgets = useAppSelector(state => state.data.items);
  // const getLatestModels = () => {
  //   if (gadgets?.length) {
  //     return gadgets
  //       .filter(gadget => gadget.name.includes('14'))
  //       .filter(gadget => gadget.name.includes('128GB'))
  //       .reverse();
  //   } else {
  //     return gadgets;
  //   }
  // };

  // const newModels = getLatestModels();

  return (
    <section id="brandModels" className="brand__models">
      {/* {newModels !== null && (
        <Devices title={'Brand new models'} devices={newModels} isNew={true} />
      )} */}
    </section>
  );
};
