import './Dropdown.scss';

import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

type Props = {
  options: string[];
  search: URLSearchParams;
  keyQuery: string;
  setQuery: SetURLSearchParams;
};

export const Dropdown: React.FC<Props> = ({
  options,
  keyQuery,
  search,
  setQuery,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [currentOption, setCurrentOption] = useState<string>(options[0]);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    search.set(keyQuery, currentOption.toLowerCase());
    setQuery(search);
  }, [currentOption]);

  function handleOpenList() {
    setIsActive(prevState => (!prevState ? true : false));
  }

  function handleChangeOption(option: string) {
    handleOpenList();
    search.set(keyQuery, option.toLowerCase());
    setQuery(search);
    setCurrentOption(option);
  }

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
