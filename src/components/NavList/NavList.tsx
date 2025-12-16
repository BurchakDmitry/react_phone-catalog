import classNames from 'classnames';
import './NavList.scss';
import { Link } from 'react-router-dom';

export const Pages = ['Home', 'Phones', 'Tablets', 'Accessories'];

type Props = {
  isHeader?: boolean;
};

export const NavList: React.FC<Props> = ({ isHeader }) => {
  return (
    <>
      <ul className={classNames('list', { is_header: isHeader })}>
        {Pages.map(linkName => {
          return (
            <Link
              key={linkName}
              className={classNames('nav__link')}
              to={linkName.toLowerCase()}
            >
              {linkName}
            </Link>
          );
        })}
      </ul>
    </>
  );
};
