import './Header.scss';
import classNames from 'classnames';
import { Nav } from '../Nav/Nav';
import { Selection } from '../Selection';
import { useState } from 'react';
import { HeaderTitle } from '../HeaderTitle';
import { HeaderBtn } from '../HeaderBtn';

export const Header: React.FC = () => {
  const [isClose, setIsClose] = useState(false);

  return (
    <header className={classNames('header')}>
      <HeaderTitle isClose={isClose} />
      <Nav />
      <Selection isHeader={true} />
      <HeaderBtn isClose={isClose} setIsClose={setIsClose} />
    </header>
  );
};
