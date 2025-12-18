import { Outlet, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { PhonePage } from './components/PhonePage';
import { NotFoundPage } from './components/NotFoundPage';
import { Footer } from './components/Footer';
import { useAppDispatch } from './types/hooks';
import { getProducts } from './api/getProducts';
import { useEffect } from 'react';
import { setProducts } from './store/products/productsSlice';

export const App = () => {
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
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/phones" element={<PhonePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Outlet />
      <Footer />
    </div>
  );
};
