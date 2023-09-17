
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const apiUrl = 'https://randomuser.me/api/';

export const fetchData3 = createAsyncThunk('api3/fetchData3', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});


const apiSlice3 = createSlice({
  name: 'api1',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData3.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData3.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData3.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apiSlice3.reducer;

