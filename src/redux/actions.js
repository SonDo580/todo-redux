import { ADD_TODO, SEARCH_TODO, STATUS_FILTER } from "./actionTypes";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const searchTodo = (searchText) => ({
  type: SEARCH_TODO,
  payload: searchText,
});

export const filterByStatus = (status) => ({
  type: STATUS_FILTER,
  payload: status,
});
