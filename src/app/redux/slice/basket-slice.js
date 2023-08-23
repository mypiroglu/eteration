import {createSlice} from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basketSlice',
  initialState: {
    basket: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      const {quantity, item} = action.payload;

      const existingItemIndex = state.basket.findIndex(
        e => e.item.id === item.id,
      );

      if (existingItemIndex !== -1) {
        // Ürün sepette zaten varsa sadece adeti arttırın
        state.basket[existingItemIndex].quantity += quantity;
      } else {
        // Ürün sepette yoksa yeni bir öğe ekleyin
        state.basket.push({item, quantity});
      }
    },
    plusOne: (state, action) => {
      const index = state.basket.findIndex(
        item => item.item.id === action.payload.id,
      );
      if (index !== -1) {
        state.basket[index].quantity += 1;
      }
    },

    minusOne: (state, action) => {
      const index = state.basket.findIndex(
        item => item.item.id === action.payload.id,
      );
      if (index !== -1) {
        state.basket[index].quantity -= 1;
      }
    },

    removeFromBasket: (state, action) => {
      const index = state.basket.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.basket.splice(index, 1);
      }
    },
  },
});

export const {addToBasket, removeFromBasket, minusOne, plusOne} =
  basketSlice.actions;
export default basketSlice.reducer;
