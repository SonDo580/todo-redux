export const todoListSelector = (state) =>
  state.todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchTextSelector())
  );

export const searchTextSelector = (state) => state.filters.search;
