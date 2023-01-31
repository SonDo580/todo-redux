import {
  ADD_TODO,
  TOGGLE_STATUS,
  PRIORITY_FILTER,
  SEARCH_TODO,
  STATUS_FILTER,
} from "./actionTypes";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleStatus = (todoID) => ({
  type: TOGGLE_STATUS,
  payload: todoID,
});

export const searchTodo = (searchText) => ({
  type: SEARCH_TODO,
  payload: searchText,
});

export const filterByStatus = (status) => ({
  type: STATUS_FILTER,
  payload: status,
});

export const filterByPriority = (priorities) => ({
  type: PRIORITY_FILTER,
  payload: priorities,
});
