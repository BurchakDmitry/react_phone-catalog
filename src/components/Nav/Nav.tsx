import classNames from 'classnames';
import './Nav.scss';
import { NavList } from '../NavList';

export const Nav: React.FC = () => {
  return (
    <nav className={classNames('nav')}>
      <NavList isHeader={true} />
    </nav>
  );
};
