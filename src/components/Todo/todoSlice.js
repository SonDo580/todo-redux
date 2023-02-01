import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   { id: 1, task: "Learn React", priority: "High", completed: true },
//   { id: 2, task: "Learn Express", priority: "High", completed: false },
//   { id: 3, task: "Learn Redux", priority: "Medium", completed: true },
//   { id: 4, task: "Learn Firebase", priority: "Medium", completed: false },
//   { id: 5, task: "Learn Networking", priority: "Low", completed: false },
// ];

const todoSlice = createSlice({
  name: "todos",
  initialState: { status: "idle", todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {});
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  console.log(res);
});

export const { addTodo, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;
