import { createSelector } from "reselect";

const todoListSelector = (state) => state.todos;
const searchTextSelector = (state) => state.filters.search;
const statusFilterSelector = (state) => state.filters.status;
const priorityFilterSelector = (state) => state.filters.priority;

export const todosRemainSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  priorityFilterSelector,
  (todoList, searchText, statusFilter, priorityFilter) => {
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
      })
      .filter((todo) => priorityFilter.includes(todo.priority));
  }
);
