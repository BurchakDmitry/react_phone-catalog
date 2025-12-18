import { useEffect, useRef, useState } from 'react';
import { Product } from '../../types/typeGadget';
import { Card } from '../Card';
import './Devices.scss';
import classNames from 'classnames';

type Props = {
  title: string;
  devices: Product[];
  isNew?: boolean;
};

export const Devices: React.FC<Props> = ({ title, devices, isNew }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(212);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    if (devices.length > 3) {
      setCanScrollRight(true);
    }
  }, [devices]);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;

    if (el) {
      el.addEventListener('scroll', checkScroll);
    }

    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (!scrollRef.current?.children.length) {
      return;
    }

    const firstCard = scrollRef.current.children[0] as HTMLElement;
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        setCardWidth(entry.contentRect.width + 16);
      }
    });

    observer.observe(firstCard);

    return () => observer.disconnect();
  }, [devices]);

  return (
    <section className="devices">
      <div className="devices__header">
        <h2 className="devices__title main__title">{title}</h2>
        <div className="devices__buttons">
          <button
            className={classNames('devices__btn', {
              active: canScrollLeft,
              disabled: canScrollRight && !canScrollLeft,
            })}
            type="button"
            onClick={scrollLeft}
          ></button>
          <button
            className={classNames('devices__btn', {
              active: canScrollRight,
              disabled: canScrollLeft && !canScrollRight,
            })}
            type="button"
            onClick={scrollRight}
          ></button>
        </div>
      </div>

      <div className="devices__catalog">
        <div className="devices__catalog-wrap" ref={scrollRef}>
          {devices.map(phone => (
            <Card key={phone.id} device={phone} isNew={isNew} />
          ))}
        </div>
      </div>
    </section>
  );
};
