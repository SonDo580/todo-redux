import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchTodo: (state, action) => {
      state.search = action.payload;
    },
    filterByStatus: (state, action) => {
      state.status = action.payload;
    },
    filterByPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});

const { reducer, actions } = filterSlice;
export const { searchTodo, filterByStatus, filterByPriority } = actions;
export default reducer;
