import {createSlice} from '@reduxjs/toolkit';
import {getData} from '../../api';

const initialState = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    reset: state => {
      state.data = undefined;
      state.isLoading = false;
      state.error = undefined;
    },
  },
  extraReducers: {
    [getData.pending]: state => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.data = action.payload;
        state.error = false;
      } else {
        state.error = true;
      }
    },
    [getData.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
  },
});
export const {reset} = productSlice.actions;
export default productSlice.reducer;
