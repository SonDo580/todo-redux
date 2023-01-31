import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/Filters/filterSlice";
import todoReducer from "../components/Todo/todoSlice";

const store = configureStore({
  reducer: {
    filters: filterReducer,
    todos: todoReducer,
  },
});

export default store;
