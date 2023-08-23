import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favoritesSlice',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      const index = state.favorites.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const {addToFavorites, removeFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;
