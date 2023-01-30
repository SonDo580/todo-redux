const initialState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, title: "Learn React", priority: "High", completed: true },
    { id: 2, title: "Learn Express", priority: "High", completed: false },
    { id: 3, title: "Learn Redux", priority: "Medium", completed: true },
    { id: 4, title: "Learn Firebase", priority: "Medium", completed: false },
    { id: 5, title: "Learn Networking", priority: "Low", completed: false },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
