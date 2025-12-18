import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/typeGadget';

type ProductState = {
  products: Product[] | [];
};

const initialState: ProductState = {
  products: [],
};

const proudctsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products.push(...action.payload);
    },
  },
});

export const { setProducts } = proudctsSlice.actions;
export default proudctsSlice.reducer;
