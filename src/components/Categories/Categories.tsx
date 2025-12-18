import { CategoryCard } from '../CategoryCard';
import './Сategories.scss';

const categories = ['Phones', 'Tablets', 'Accessories'];

export const Categories = () => {
  return (
    <section className="categories">
      <h2 className="categoires__title main__title">Shop by category</h2>
      <div className="categories__list">
        {categories.map((category, index) => {
          // const lowerCaseCategory = category.toLowerCase();

          return <CategoryCard category={category} key={index} />;
        })}
      </div>
    </section>
  );
};
