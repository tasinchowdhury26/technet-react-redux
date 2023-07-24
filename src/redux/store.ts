import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/products/productSlice';
import userReducer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultmiddleware) =>
    getDefaultmiddleware().concat(api.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
