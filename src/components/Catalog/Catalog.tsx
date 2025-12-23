import { TitleNotification } from '../TitleNotification';
import './Catalog.scss';
import { Dropdown } from '../Dropdown';
import { Product } from '../../types/typeGadget';
import { Card } from '../Card';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import classNames from 'classnames';

type Props = {
  gadgets: Product[];
  gadgetType: string;
};

const DEFAULT_ITEMS_PER_PAGE = 8;
const DEFAULT_SORT = 'newest';

export const Catalog: React.FC<Props> = ({ gadgets, gadgetType }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('index')) || 0;
  const itemsPerPage =
    Number(searchParams.get('perPage')) || DEFAULT_ITEMS_PER_PAGE;
  const sortType = searchParams.get('sort') || DEFAULT_SORT;

  const sortedGadgets = useMemo(() => {
    const sorted = [...gadgets];

    switch (sortType) {
      case 'newest':
        return sorted.sort((a, b) => b.year - a.year);
      case 'cheaper':
        return sorted.sort((a, b) => a.price - b.price);
      case 'expensive':
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return sorted.sort((a, b) => b.year - a.year);
    }
  }, [gadgets, sortType]);

  const totalPages = Math.ceil(sortedGadgets.length / itemsPerPage);
  const safePage = currentPage >= totalPages ? 0 : currentPage;
  const displayedGadgets = useMemo(() => {
    const startIndex = safePage * itemsPerPage;

    return sortedGadgets.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedGadgets, safePage, itemsPerPage]);

  useEffect(() => {
    const index = searchParams.get('index');

    if (index === null) {
      return;
    }

    if (+index >= safePage) {
      searchParams.set('index', `0`);
    }
  }, [searchParams, safePage]);

  const updateSearchParams = (updates: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      newParams.set(key, value);
    });
    setSearchParams(newParams);
  };

  const handleChangePage = (page: number) => {
    updateSearchParams({ index: String(page) });
  };

  const handleNextPage = () => {
    if (safePage < totalPages - 1) {
      updateSearchParams({ index: String(safePage + 1) });
    }
  };

  const handlePrevPage = () => {
    if (safePage > 0) {
      updateSearchParams({ index: String(safePage - 1) });
    }
  };

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
            keyQuery={'perPage'}
          />
        </div>
      </div>

      <section className="catalog__gadgets">
        {displayedGadgets.map(gadget => (
          <Card
            device={gadget}
            onCatalog={true}
            key={`gadget-page_${gadget.itemId}`}
          />
        ))}

        {totalPages > 1 && (
          <div className="catalog__pagination pagination">
            <button
              className="pagination__btn left"
              type="button"
              onClick={handlePrevPage}
              disabled={safePage === 0}
            />

            <div className="pagination__pages">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={classNames('pagination__btn', {
                    active: index === safePage,
                  })}
                  type="button"
                  onClick={() => handleChangePage(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              className="pagination__btn right"
              type="button"
              onClick={handleNextPage}
              disabled={safePage === totalPages - 1}
            />
          </div>
        )}
      </section>
    </section>
  );
};
