import './SliderModule.scss';
import classNames from 'classnames';

export const SliderModule = () => {
  return (
    <section className="slider">
      <div className="slider__block">
        <button
          className="slider__block__btn slider__block__btn--left"
          type="button"
        ></button>
        {/* gallery block */}
        <div className="slider__block__gallery">
          <article className={classNames('gallery  is__active')}>
            <div className={classNames('gallery__order  is__active')}>
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
            <article className={classNames('gallery__main')}></article>
          </article>
        </div>

        <button
          className="slider__block__btn slider__block__btn--right"
          type="button"
        ></button>
      </div>

      <div className="slider__pagination">
        <nav className="slider__pagination__nav">
          <ul className="slider__pagination__list">
            <li className={classNames('slider__pagination__item')}></li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
