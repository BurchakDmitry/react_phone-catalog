import { Link } from 'react-router-dom';
import './HeaderTitle.scss';
import classNames from 'classnames';

type Props = {
  isClose: boolean;
};

export const HeaderTitle: React.FC<Props> = ({ isClose }) => {
  return (
    <h1 className="header__title">
      <Link
        className={classNames('header__title-link', { is__menu: isClose })}
        to={''}
      ></Link>
    </h1>
  );
};
