/* eslint no-param-reassign: "error" */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'http://127.0.0.1:3000/api/greetings';

const initialState = {
  id: null,
  message: '',
  created_at: '',
  updated_at: '',
  isLoading: true,
};

export const getMessageData = createAsyncThunk('message/getMessageData', async () => {
  const response = await fetch(API, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
  const data = await response.json();
  return data;
});

const messageSlice = createSlice({
  initialState,
  name: 'message',
  extraReducers: (builder) => {
    builder.addCase(getMessageData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMessageData.fulfilled, (state, action) => {
      state.message = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMessageData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default messageSlice.reducer;
