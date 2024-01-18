import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getGreeting = createAsyncThunk('greeting/getGreeting', async () => {
  try {
    const response = await fetch(
      'http://127.0.0.1:3000/api/v1/greeting/random_greeting',
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return 'Something went wrong';
  }
});

const initialState = {
  greeting: null,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload.greeting;
      })
      .addCase(getGreeting.rejected, (state) => {
        state.greeting = 'failed to load.';
      })
      .addCase(getGreeting.pending, (state) => {
        state.greeting = 'Pending..';
      });
  },
});

export { getGreeting };
export default greetingSlice.reducer;
