import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
const basketSlice = createSlice({
  name: 'basketSlice',
  initialState: {
    basket: [],
  },
  reducers: {
    addToBasketInitial: (state, action) => {
      const {quantity, item} = action.payload;
      const existingItemIndex = state.basket.findIndex(e => e.id === item.id);

      if (existingItemIndex !== -1) {
        state.basket[existingItemIndex].quantity += quantity;
      } else {
        state.basket.push({item, quantity});
      }
    },
    addToBasket: (state, action) => {
      const {quantity, item} = action.payload;

      const existingItemIndex = state.basket.findIndex(
        e => e.item.id === item.id,
      );

      if (existingItemIndex !== -1) {
        state.basket[existingItemIndex].quantity += quantity;
      } else {
        state.basket.push({item, quantity});
      }
      AsyncStorage.removeItem('basket');
      AsyncStorage.setItem('basket', JSON.stringify(state.basket));
    },
    plusOne: (state, action) => {
      const index = state.basket.findIndex(
        item => item.item.id === action.payload.id,
      );
      if (index !== -1) {
        state.basket[index].quantity += 1;
      }
      AsyncStorage.removeItem('basket');
      AsyncStorage.setItem('basket', JSON.stringify(state.basket));
    },

    minusOne: (state, action) => {
      const index = state.basket.findIndex(
        item => item.item.id === action.payload.id,
      );
      if (index !== -1) {
        state.basket[index].quantity -= 1;
      }
      AsyncStorage.removeItem('basket');
      AsyncStorage.setItem('basket', JSON.stringify(state.basket));
    },

    removeFromBasket: (state, action) => {
      const index = state.basket.findIndex(
        item => item.item.id === action.payload.item.id,
      );
      if (index !== -1) {
        state.basket.splice(index, 1);
      }
      AsyncStorage.removeItem('basket');
      AsyncStorage.setItem('basket', JSON.stringify(state.basket));
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  minusOne,
  plusOne,
  addToBasketInitial,
} = basketSlice.actions;
export default basketSlice.reducer;
