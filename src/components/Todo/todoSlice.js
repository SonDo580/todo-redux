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
  initialState: { status: "idle", todoList: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todoList = action.payload;
        state.status = "idle";
      })
      .addCase(addTodoThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.todoList.push(action.payload);
      })
      .addCase(toggleStatusThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(toggleStatusThunk.fulfilled, (state, action) => {
        const currentTodo = state.todoList.find(
          (todo) => todo.id === action.payload
        );
        currentTodo.completed = !currentTodo.completed;
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  return data.todos;
});

export const addTodoThunk = createAsyncThunk(
  "todos/addTodoThunk",
  async (todo) => {
    const res = await fetch("api/todos", {
      method: "POST",
      body: JSON.stringify(todo),
    });

    const data = await res.json();
    return data.todo;
  }
);

export const toggleStatusThunk = createAsyncThunk(
  "todos/toggleStatusThunk",
  async (id) => {
    const res = await fetch(`api/todo/${id}`, {
      method: "PUT",
    });

    const data = await res.json();
    return data.todo.id;
  }
);

export const { addTodo, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;
