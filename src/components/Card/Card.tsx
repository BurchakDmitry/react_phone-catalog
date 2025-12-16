import classNames from 'classnames';
import './Card.scss';
import { Gadget } from '../../types/typeGadget';

type Props = {
  device: Gadget;
  isNew?: boolean;
  onCatalog?: boolean;
};

export const Card: React.FC<Props> = ({ device, isNew, onCatalog }) => {
  const getCorrectScreen = () => {
    const screen = device.screen;

    if (screen.length > 10) {
      return `${screen.slice(0, 4)} OLED`;
    } else {
      return screen;
    }
  };

  return (
    <article
      className={classNames('card', {
        on__catalog: onCatalog !== undefined ? onCatalog : false,
      })}
    >
      <div className="card__img-wrapper">
        <img
          className="card__img"
          src={`../${device.images[0]}`}
          alt={device.namespaceId}
        />
      </div>
      <h2 className="card__title">
        <a href="#">{device.name}</a>
      </h2>
      <div className="card__prices">
        {isNew ? (
          <p className="card__price discount">${device.priceDiscount}</p>
        ) : (
          <>
            <p className="card__price discount">${device.priceDiscount}</p>
            <p className="card__price regular">${device.priceRegular}</p>
          </>
        )}
      </div>
      <span className="card__line"></span>
      <div className="card__params">
        <div className="card__row">
          <p className="card__property">Screen</p>
          <p className="card__value">{getCorrectScreen()}</p>
        </div>
        <div className="card__row">
          <p className="card__property">Capacity</p>
          <p className="card__value">{device.capacity}</p>
        </div>
        <div className="card__row">
          <p className="card__property">RAM</p>
          <p className="card__value">{device.ram}</p>
        </div>
      </div>

      <div className="card__buttons">
        <button type="button" className="card__btn-buy">
          Add to cart
        </button>
        <button
          type="button"
          className={classNames('card__btn-like', { selected: false })}
        ></button>
      </div>
    </article>
  );
};
