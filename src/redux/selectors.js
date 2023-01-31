export const todoListSelector = (state) =>
  state.todos.filter((todo) => {
    const searchText = searchTextSelector(state);

    return todo.task.toLowerCase().includes(searchText);
  });

export const searchTextSelector = (state) => state.filters.search;
