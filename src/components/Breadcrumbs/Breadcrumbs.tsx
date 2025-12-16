import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';
import classNames from 'classnames';

const createValideName = (string: string): string => {
  return string[0].toUpperCase() + string.slice(1, string.length);
};

export const Breadcrumbs = () => {
  const path = useLocation()
    .pathname.split('/')
    .filter(el => el);

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__wrapp">
        <Link className="breadcrumbs__home" to="/home"></Link>
        {path.map((page, i) => (
          <Link
            className={classNames('breadcrumbs__link', {
              is__active: path.length >= 2 && i === 0,
            })}
            key={`breadcrumbs${page}`}
            to={`/${path[i - 1] !== undefined ? path[i - 1] + '/' : ''}${page}`}
          >
            {createValideName(page)}
          </Link>
        ))}
      </div>
    </div>
  );
};
