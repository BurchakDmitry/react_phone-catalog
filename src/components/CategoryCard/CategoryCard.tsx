import classNames from 'classnames';
import './CategoryCard.scss';
import { useMemo } from 'react';
import { useAppSelector } from '../../types/hooks';
import { Link } from 'react-router-dom';

type Props = {
  category: string;
};

export const CategoryCard: React.FC<Props> = ({ category }) => {
  const lowerCaseCategory = category.toLowerCase();
  const products = useAppSelector(state => state.products.products);
  const currentCategory = category.toLowerCase();
  const uniqueModelsMemo = useMemo(
    () => [...products].filter(product => product.category === currentCategory),
    [products, currentCategory],
  );

  return (
    <article className="categories__category category">
      <Link
        to={`../${lowerCaseCategory}`}
        className={classNames(
          'category__wrap',
          `category__wrap--${lowerCaseCategory}`,
        )}
      >
        <div
          className={classNames(
            'category__gadget',
            `category__gadget--${lowerCaseCategory}`,
          )}
        ></div>
      </Link>
      <div className="category__description">
        <h4 className="category__description-title">
          {category !== 'Tablets' && category !== 'Accessories'
            ? 'Mobile phones'
            : category}
        </h4>
        <p className="category__description-qty">
          {uniqueModelsMemo.length} models
        </p>
      </div>
    </article>
  );
};
