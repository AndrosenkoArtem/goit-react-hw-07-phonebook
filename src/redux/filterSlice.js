import { createSlice } from '@reduxjs/toolkit';
const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterName(state, action) {
      return action.payload;
    },
  },
});
export const { setFilterName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
