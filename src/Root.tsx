import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { PhonePage } from './components/PhonePage';
import { NotFoundPage } from './components/NotFoundPage';
import { useAppDispatch } from './types/hooks';
import { useEffect } from 'react';
import { getProducts } from './api/getProducts';
import { setProducts } from './store/products/productsSlice';
import { TabletPage } from './components/TabletPage';
import { AccessoriesPage } from './components/AccessoriesPage';

export const Root = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();

        if (data !== null) {
          dispatch(setProducts(data));
        }
      } catch {
        throw new Error();
      }
    })();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="phones">
            <Route index element={<PhonePage />} />
            <Route path=":slug" element={<PhonePage />} />
          </Route>
          <Route path="tablets">
            <Route index element={<TabletPage />} />
            <Route path=":slug" element={<TabletPage />} />
          </Route>
          <Route path="accessories">
            <Route index element={<AccessoriesPage />} />
            <Route path=":slug" element={<AccessoriesPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
