// import { Phone } from '../../slices/gadgets';
import { TitleNotification } from '../TitleNotification';
import './Catalog.scss';
import { Dropdown } from '../Dropdown';
import { Product } from '../../types/typeGadget';
// import { Card } from '../Card';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

type Props = {
  gadgets: Product[];
  gadgetType: string;
};

export const Catalog: React.FC<Props> = ({ gadgets, gadgetType }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState<Product[]>([]);
  // const [pages, setPages] = useState<Product[][]>([]);
  // const [qtyPages, setQtyPages] = useState(0);

  useEffect(() => {
    const filter = searchParams.get('filter');
    const sort = searchParams.get('sort');

    if (sort !== null) {
      // const sortedGudgets = () =>
      //   [...gadgets].sort((a, b) => {
      //     switch (sort) {
      //       case 'newest':
      //         return b.year - a.year;

      //       case 'cheaper':
      //         return a.price - b.price;

      //       case 'expensive':
      //         return b.price - a.price;

      //       default:
      //         return a.year - b.year;
      //     }
      //   });

      if (filter !== null) {
        // const filteredGudgets = () => [...sortedGudgets()].slice(0, +filter);

        // setQtyPages(Math.ceil(gadgets.length / +filter));
        // setCurrentPage(filteredGudgets());
        const arr = [];

        for (let i = 0; i < gadgets.length; i += +filter) {
          const page = [...gadgets].slice(i, +filter);

          arr.push(page);
        }

        // setPages(arr);
      }
    }
  }, [searchParams]);

  return (
    <section className="catalog">
      <TitleNotification title={gadgetType} typeNotification={'market'} />
      <div className="catalog__qty">
        <p className="catalog__qty-text">{gadgets.length} models</p>
      </div>
      <div className="catalog__filter">
        <div className="catalog__filter-item catalog__filter-item--sort">
          <p className="catalog__filter-title">Sort by</p>
          <Dropdown
            options={['Newest', 'Cheaper', 'Expensive']}
            search={searchParams}
            setQuery={setSearchParams}
            keyQuery={'sort'}
          />
        </div>
        <div className="catalog__filter-item catalog__filter-item--slice">
          <p className="catalog__filter-title">Items on page</p>
          <Dropdown
            options={['8', '16', '24', '32']}
            search={searchParams}
            setQuery={setSearchParams}
            keyQuery={'filter'}
          />
        </div>
      </div>

      <section className="catalog__gadgets">
        {/* {currentPage.map(page => (
          <Card
            device={page}
            onCatalog={true}
            key={`phone-page_${page.itemId}`}
          />
        ))} */}

        <div className="catalog__pagination pagination">
          <button className="pagination__btn left" type="button"></button>
          <div className="pagination__pages">
            {/* {pages.map((_, index) => (
              <button className="pagination__btn page" type="button">
                {index + 1}
              </button>
            ))} */}
          </div>
          <button className="pagination__btn right" type="button"></button>
        </div>
      </section>
    </section>
  );
};
