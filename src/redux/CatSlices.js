import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cats: [],
  catscategories: [],
  catimages: [],
};

export const fetchAsyncCats = createAsyncThunk(
  'cats/fetchAsyncCats',
  async () => {
    const response = await axios
      .get(
        'https://api.thecatapi.com/v1/images/search',
        { 'x-api-key': '8ddc6f46-9929-460e-b918-df3e5398f784' },
        {
          headers: {
            'x-api-key': '8ddc6f46-9929-460e-b918-df3e5398f784',
          },
        }
      )
      .catch((err) => {
        console.log('Err:', err);
      });
    return response.data;
  }
);

export const fetchAsyncCatCategories = createAsyncThunk(
  'catscategories/fetchAsyncCatCategories',
  async () => {
    const response = await axios
      .get(
        'https://api.thecatapi.com/v1/categories',
        { 'x-api-key': '8ddc6f46-9929-460e-b918-df3e5398f784' },
        {
          headers: {
            'x-api-key': '8ddc6f46-9929-460e-b918-df3e5398f784',
          },
        }
      )
      .catch((err) => {
        console.log('Err:', err);
      });
    return response.data;
  }
);

export const fetchAsyncCatImages = createAsyncThunk(
  'cat/catImages',
  async (id) => {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`,
      { 'x-api-key': '8ddc6f46-9929-460e-b918-df3e5398f784' },
      {
        headers: {
          'x-api-key': '8ddc6f46-9929-460e-b918-df3e5398f784',
        },
      }
    );
    return response.data;
  }
);

export const catSlices = createSlice({
  name: 'cat',
  initialState,
  extraReducers: {
    [fetchAsyncCats.pending]: () => {
      console.log('pending');
    },
    [fetchAsyncCats.fulfilled]: (state, { payload }) => {
      console.log('Fetched');
      return { ...state, cats: payload };
    },
    [fetchAsyncCats.rejected]: () => {
      console.log('rejected');
    },
    [fetchAsyncCatCategories.fulfilled]: (state, { payload }) => {
      console.log('fetched');
      return { ...state, catscategories: payload };
    },
    [fetchAsyncCatImages.fulfilled]: (state, { payload }) => {
      console.log('images fetched');
      return { ...state, catimages: payload };
    },
  },
});

export const getAllCats = (state) => state.cat.cats;
export default catSlices.reducer;
export const getAllCategories = (state) => state.cat.catscategories;
export const getImages = (state) => state.cat.catimages;
