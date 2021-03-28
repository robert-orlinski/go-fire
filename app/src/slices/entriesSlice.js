import { createSlice } from '@reduxjs/toolkit';

export const entriesSlice = createSlice({
  name: 'entry',
  initialState: {
    data: () => {
      fetch(`${process.env.API_URL}/add-entry`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
    },
  },
  reducers: {
    add: (state) => {
      fetch(`${process.env.API_URL}/add-entry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values, null, 2),
      });
    },
    remove: (state, action) => {
      state.data.splice(action.id, 1);
    },
  },
});

export const { add, remove } = entriesSlice.actions;

export default entriesSlice.reducer;