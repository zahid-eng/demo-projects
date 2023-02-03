import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: state => {
      state.counter += 1;
    },

    decreament: state => {
      state.counter -= 1;
    },
  },
});

export const {increament, decreament} = counterSlice.actions;
export default counterSlice.reducer;
