import { createSlice } from '@reduxjs/toolkit';

export const entriesSlice = createSlice({
  name: 'entry',
  initialState: {
    data: [],
  },
  reducers: {
    add: (state) => {
      state.data.push({
        id: 1,
        date: '233',
        categories: ['investments', 'speculations'],
      });
    },
    remove: (state, action) => {
      state.data.splice(action.id, 1);
    },
  },
});

export const { add, remove } = entriesSlice.actions;

export default entriesSlice.reducer;
