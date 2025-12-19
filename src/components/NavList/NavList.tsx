import classNames from 'classnames';
import './NavList.scss';
import { NavLink } from 'react-router-dom';

export const Pages = ['Home', 'Phones', 'Tablets', 'Accessories'];

type Props = {
  isHeader?: boolean;
};

export const NavList: React.FC<Props> = ({ isHeader }) => {
  // const searchParams = new URLSearchParams();

  return (
    <ul className={classNames('list', { is_header: isHeader })}>
      {Pages.map(linkName => {
        return (
          <NavLink
            key={linkName}
            className={classNames('nav__link')}
            to={`/${linkName.toLowerCase()}`}
          >
            {linkName}
          </NavLink>
        );
      })}
    </ul>
  );
};
