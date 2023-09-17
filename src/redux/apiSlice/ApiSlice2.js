
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  data: [],
  loading: false,
  error: null,
};


const apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

export const fetchData2 = createAsyncThunk('api2/fetchData2', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

const apiSlice2 = createSlice({
  name: 'api1',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData2.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData2.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData2.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apiSlice2.reducer;
