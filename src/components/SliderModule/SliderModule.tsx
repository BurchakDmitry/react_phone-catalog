import { useState } from 'react';
import './SliderModule.scss';
import classNames from 'classnames';
// import { SliderGallery } from '../SliderGallery';
// import { Gadget } from '../../types/typeGadget';
// import classNames from 'classnames';
// import { useAppSelector } from '../../App';

export const SliderModule = () => {
  // const gadgets = useAppSelector(state => state.data.items);
  // const [phones, setPhones] = useState<null | Gadget[]>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // const handleChangeSlide = (
  //   e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  //   index: number,
  // ) => {
  //   e.preventDefault();
  //   setActiveSlide(index);
  // };

  // useEffect(() => {
  //   if (gadgets.length) {
  //     const slides = [...gadgets].slice(19, 19 + 3);

  //     setPhones(slides);
  //   }
  // }, [gadgets]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (phones?.length && activeSlide >= phones.length - 1) {
  //       setActiveSlide(0);
  //     } else {
  //       setActiveSlide(prev => prev + 1);
  //     }
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [activeSlide]);

  return (
    <section className="slider">
      <div className="slider__block">
        <button
          onClick={() => {
            if (activeSlide !== 0) {
              setActiveSlide(prev => prev - 1);
            } else {
              setActiveSlide(2);
            }
          }}
          className="slider__block__btn slider__block__btn--left"
          type="button"
        ></button>
        {/* gallery block */}
        <div className="slider__block__gallery">
          <article
            // key={index}
            className={classNames(
              'gallery  is__active',
              // {
              //   is__active: activeSlide === index,
              // }
            )}
          >
            <div
              className={classNames(
                'gallery__order  is__active',
                // {
                //   is__active: activeSlide === index,
                //   is__reverse: index % 2 !== 0,
                //   is__standart: index % 2 === 0,
                // }
              )}
            >
              <div className="gallery__order-wrapper">
                <h3 className="gallery__order-title">
                  Now available is our store!
                </h3>
                <p className="gallery__order-slogan">Be the first!</p>
              </div>
              <div>
                <a className="gallery__order-btn" href="#">
                  Order now
                </a>
              </div>
            </div>
          </article>
          {/* {phones?.length &&
            phones.map((phone, index) => {
              return (
                <article
                  key={index}
                  className={classNames('gallery', {
                    is__active: activeSlide === index,
                  })}
                >
                  <div
                    className={classNames('gallery__order', {
                      is__active: activeSlide === index,
                      is__reverse: index % 2 !== 0,
                      is__standart: index % 2 === 0,
                    })}
                  >
                    <div className="gallery__order-wrapper">
                      <h3 className="gallery__order-title">
                        {phone.priceDiscount}, 00 $
                      </h3>
                      <p className="gallery__order-slogan">Be the first!</p>
                    </div>
                    <div>
                      <a className="gallery__order-btn" href="#">
                        Order now
                      </a>
                    </div>
                  </div>
                  <SliderGallery phone={phone} index={index} />
                </article>
              );
            })} */}
        </div>

        <button
          onClick={() => {
            if (activeSlide !== 2) {
              setActiveSlide(prev => prev + 1);
            } else {
              setActiveSlide(0);
            }
          }}
          className="slider__block__btn slider__block__btn--right"
          type="button"
        ></button>
      </div>

      <div className="slider__pagination">
        <nav className="slider__pagination__nav">
          <ul className="slider__pagination__list">
            {/* {phones &&
              phones.map((_, index) => {
                return (
                  <li
                    onClick={e => handleChangeSlide(e, index)}
                    className={classNames('slider__pagination__item', {
                      is__active: index === activeSlide,
                    })}
                    key={index}
                  ></li>
                );
              })} */}
          </ul>
        </nav>
      </div>
    </section>
  );
};
