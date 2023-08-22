import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://5fc9346b2af77700165ae514.mockapi.io';
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    accept: '*/*',
  },
});

axios
  .get(BASE_URL)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Veri çekme hatası:', error);
  });

export const getData = createAsyncThunk('products', async () => {
  const res = await instance.get('products');
  return res.data;
});
