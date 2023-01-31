import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, task: "Learn React", priority: "High", completed: true },
  { id: 2, task: "Learn Express", priority: "High", completed: false },
  { id: 3, task: "Learn Redux", priority: "Medium", completed: true },
  { id: 4, task: "Learn Firebase", priority: "Medium", completed: false },
  { id: 5, task: "Learn Networking", priority: "Low", completed: false },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleStatus: (state, action) => {
      const todoChange = state.find((todo) => todo.id === action.payload);
      todoChange.completed = !todoChange.completed;
    },
  },
});

const { reducer, actions } = todoSlice;
export const { addTodo, toggleStatus } = actions;
export default reducer;
