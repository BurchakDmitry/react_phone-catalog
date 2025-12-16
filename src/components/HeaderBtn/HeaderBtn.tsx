import classNames from 'classnames';

type Props = {
  isClose: boolean;
  setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderBtn: React.FC<Props> = ({ isClose, setIsClose }) => {
  const handleChangeMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    setIsClose((prevState: boolean) => !prevState);
  };

  return (
    <button
      onClick={e => handleChangeMenu(e)}
      className={classNames('header__menu', { is_close: isClose })}
    ></button>
  );
};
