import { ADD_TODO, SEARCH_TODO } from "./actionTypes";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const searchTodo = (searchText) => ({
  type: SEARCH_TODO,
  payload: searchText,
});
