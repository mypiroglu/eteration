import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import {productSlice, favoritesSlice, basketSlice} from './slice';
const reducer = combineReducers({
  products: productSlice,
  favorites: favoritesSlice,
  basket: basketSlice,
});
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
