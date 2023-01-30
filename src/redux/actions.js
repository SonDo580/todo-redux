import { ADD_TODO } from "./actionTypes";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
