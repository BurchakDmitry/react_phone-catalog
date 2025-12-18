import { useEffect, useMemo, useState } from 'react';
import './SliderModule.scss';
import classNames from 'classnames';
import { Product } from '../../types/typeGadget';
import { getLatestModels } from '../../utils/getLatestModels';
import { getUniqueModels } from '../../utils/getUniqueModels';
import { useAppSelector } from '../../types/hooks';

export const SliderModule = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const products = useAppSelector(state => state.products.products);

  const latestModelsMemo: [] | Product[] = useMemo(
    () => getLatestModels(products),
    [products],
  );

  const uniqueModelsMemo: [] | Product[] = useMemo(
    () => getUniqueModels(latestModelsMemo, 'color'),
    [latestModelsMemo],
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide(prev => {
        const nextSlide = prev + 1;

        return nextSlide >= uniqueModelsMemo.length ? 0 : nextSlide;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [uniqueModelsMemo.length]);

  const sectionStyle = {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: uniqueModelsMemo.length
      ? `url('${uniqueModelsMemo[activeSlide].image}')`
      : '',
  };

  const handleNextSlide = () => {
    if (activeSlide < uniqueModelsMemo.length - 1) {
      setActiveSlide(prev => prev + 1);
    } else {
      setActiveSlide(0);
    }
  };

  const hanldePrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(prev => prev - 1);
    } else {
      setActiveSlide(uniqueModelsMemo.length - 1);
    }
  };

  return (
    <section className="slider">
      <div className="slider__block">
        <button
          onClick={hanldePrevSlide}
          className="slider__block__btn slider__block__btn--left"
          type="button"
        ></button>

        <div className="slider__block__gallery">
          <article
            className={classNames('gallery', {
              is_reverse: activeSlide % 2 !== 0,
            })}
          >
            <div className={classNames('gallery__order')}>
              <div className="gallery__order-wrapper">
                <h3 className="gallery__order-title">
                  Now available is our store!
                </h3>
                <p className="gallery__order-slogan">
                  <strong>Be the first!</strong>
                </p>
              </div>
              <div>
                <a className="gallery__order-btn" href="#">
                  Order now
                </a>
              </div>
            </div>
            <article
              className={classNames('gallery__main')}
              style={sectionStyle}
            ></article>
          </article>
        </div>

        <button
          onClick={handleNextSlide}
          className="slider__block__btn slider__block__btn--right"
          type="button"
        ></button>
      </div>

      <div className="slider__pagination">
        <nav className="slider__pagination__nav">
          <ul className="slider__pagination__list">
            {uniqueModelsMemo.map((_, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={classNames('slider__pagination__item', {
                    is_active: index === activeSlide,
                  })}
                ></li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};
