import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
      .addCase(addTodo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todoList.push(action.payload);
      })
      .addCase(toggleTodoStatus.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(toggleTodoStatus.fulfilled, (state, action) => {
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

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const res = await fetch("api/todos", {
    method: "POST",
    body: JSON.stringify(todo),
  });

  const data = await res.json();
  return data.todo;
});

export const toggleTodoStatus = createAsyncThunk(
  "todos/toggleTodoStatus",
  async (id) => {
    const res = await fetch(`api/todo/${id}`, {
      method: "PUT",
    });

    const data = await res.json();
    return data.todo.id;
  }
);

export default todoSlice.reducer;
