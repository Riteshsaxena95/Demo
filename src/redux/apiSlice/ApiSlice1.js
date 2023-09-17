
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const apiUrl = 'https://api.publicapis.org/entries';

export const fetchData1 = createAsyncThunk('api1/fetchData1', async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const apiSlice1 = createSlice({
  name: 'api1',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData1.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData1.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apiSlice1.reducer;
