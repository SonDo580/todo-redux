import { createSelector } from "reselect";

const todoListSelector = (state) => state.todos;
const searchTextSelector = (state) => state.filters.search;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    return todoList.filter((todo) =>
      todo.task.toLowerCase().includes(searchText)
    );
  }
);
