import classNames from 'classnames';
import { Phone } from '../../types/typeGadget';

type Props = {
  phone: Phone;
  index: number;
};

const getCorrectName = (name: string) => {
  return name
    .split('-')
    .map(el => el.toUpperCase())
    .filter(el => el !== 'APPLE')
    .join(' ');
};

export const SliderGallery: React.FC<Props> = ({ phone, index }) => {
  const { namespaceId, images } = phone;
  const urlImage = images[0];

  return (
    <div
      className={classNames('gallery__main', {
        is__reverse: index % 2 !== 0,
      })}
    >
      <h2 className="gallery__main-title">{getCorrectName(namespaceId)}</h2>
      <h4 className="gallery__main-subtitle">{phone.color.toUpperCase()}</h4>
      <div className="gallery__phone-wrapper">
        <img
          className="gallery__main-img"
          src={`../public/${urlImage}`}
          alt="iphone"
        />
      </div>
    </div>
  );
};
