import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchTodo: (state, action) => {
      state.search = action.payload;
    },
    filterByStatus: (state, action) => {
      state.status = action.payload;
    },
    filterByPriority: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export const { searchTodo, filterByStatus, filterByPriority } =
  filterSlice.actions;
export default filterSlice.reducer;
