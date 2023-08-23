import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';

const favoritesSlice = createSlice({
  name: 'favoritesSlice',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavoritesInitial: (state, action) => {
      state.favorites.push(action.payload);
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
      AsyncStorage.removeItem('favorites');
      AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFromFavorites: (state, action) => {
      const index = state.favorites.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
      AsyncStorage.removeItem('favorites');
      AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const {addToFavorites, removeFromFavorites, addToFavoritesInitial} =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
