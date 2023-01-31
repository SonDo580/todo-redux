import { createSelector } from "reselect";

const todoListSelector = (state) => state.todos;
const searchTextSelector = (state) => state.filters.search;
const statusFilterSelector = (state) => state.filters.status;

export const todosRemainSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  (todoList, searchText, statusFilter) => {
    return todoList
      .filter((todo) => todo.task.toLowerCase().includes(searchText))
      .filter((todo) => {
        if (statusFilter === "All") {
          return true;
        } else if (statusFilter === "Completed") {
          return todo.completed;
        } else {
          return !todo.completed;
        }
      });
  }
);
