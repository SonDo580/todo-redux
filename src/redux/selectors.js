import { createSelector } from "@reduxjs/toolkit";

const todoListSelector = (state) => state.todos.todoList;
const searchTextSelector = (state) => state.filters.search;
const statusFilterSelector = (state) => state.filters.status;
const priorityFilterSelector = (state) => state.filters.priorities;

export const todosRemainSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  priorityFilterSelector,
  (todoList, searchText, statusFilter, priorityFilter) => {
    return todoList.filter((todo) => {
      const containSearchText = todo.task.toLowerCase().includes(searchText);

      const meetStatusCondition =
        statusFilter === "All"
          ? true
          : statusFilter === "Completed"
          ? todo.completed
          : !todo.completed;

      const meetPriorityCondition =
        priorityFilter.length === 0
          ? true
          : priorityFilter.includes(todo.priority);

      return containSearchText && meetStatusCondition && meetPriorityCondition;
    });
  }
);
