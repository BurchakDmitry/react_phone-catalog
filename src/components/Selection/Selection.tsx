import { Link } from 'react-router-dom';
import './Selection.scss';
import classNames from 'classnames';

type Props = {
  isHeader?: boolean;
};

export const Selection: React.FC<Props> = ({ isHeader }) => {
  return (
    <article
      className={classNames('selection', { header__selection: isHeader })}
    >
      <Link
        className={classNames('selection__btn', 'selection__btn--favorites', {
          is_header: isHeader,
        })}
        to={''}
      >
        <span
          className={classNames('selection__btn-qty', {
            is__active: true,
          })}
        >
          2
        </span>
      </Link>
      <Link
        className={classNames('selection__btn', 'selection__btn--cart', {
          is_header: isHeader,
        })}
        to={''}
      >
        <span
          className={classNames('selection__btn-qty', {
            is__active: true,
          })}
        >
          10
        </span>
      </Link>
    </article>
  );
};
