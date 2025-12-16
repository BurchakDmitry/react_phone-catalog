import './Dropdown.scss';

import classNames from 'classnames';
import { useRef, useState } from 'react';
// import { useClickOutside } from '../../hooks/useClickOutside';

type Props = {
  options: string[] | number[];
};

export const Dropdown: React.FC<Props> = ({ options }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentOption, setCurrentOption] = useState<string | number>(
    options[0],
  );
  const ref = useRef<HTMLUListElement>(null);

  function handleOpenList() {
    setIsActive(prevState => (!prevState ? true : false));
  }

  function handleChangeOption(option: string | number) {
    handleOpenList();
    setCurrentOption(option);
  }

  // useClickOutside(ref, () => {
  //   if (ref !== null) {
  //     setIsActive(false);
  //   }
  // });

  return (
    <article className="dropdown">
      <div className="dropdown__select">
        <p
          onClick={handleOpenList}
          className={classNames('dropdown__select-title', {
            is__active: isActive,
            is__close: !isActive,
          })}
        >
          {currentOption}
        </p>
        <ul
          ref={ref}
          className={classNames('dropdown__list', {
            is__active: isActive,
          })}
        >
          {options.map((option, index) => (
            <li
              onClick={() => handleChangeOption(option)}
              className={classNames('dropdown__list-item', {
                is__active: option === currentOption,
              })}
              key={index}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
