import classNames from 'classnames';
import './CategoryCard.scss';

type Props = {
  category: string;
};

export const CategoryCard: React.FC<Props> = ({ category }) => {
  const lowerCase = category.toLowerCase();

  return (
    <article className="categories__category category">
      <div
        className={classNames('category__wrap', `category__wrap--${lowerCase}`)}
      >
        <div
          className={classNames(
            'category__gadget',
            `category__gadget--${lowerCase}`,
          )}
        ></div>
      </div>
      <div className="category__description">
        <h4 className="category__description-title">
          {category !== 'Tablets' && category !== 'Accessories'
            ? 'Mobile phones'
            : category}
        </h4>
        <p className="category__description-qty">N models</p>
      </div>
    </article>
  );
};
