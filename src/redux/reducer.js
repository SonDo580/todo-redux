import { ADD_TODO, SEARCH_TODO } from "./actionTypes";

const initialState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todos: [
    { id: 1, task: "Learn React", priority: "High", completed: true },
    { id: 2, task: "Learn Express", priority: "High", completed: false },
    { id: 3, task: "Learn Redux", priority: "Medium", completed: true },
    { id: 4, task: "Learn Firebase", priority: "Medium", completed: false },
    { id: 5, task: "Learn Networking", priority: "Low", completed: false },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case SEARCH_TODO:
      return {
        ...state,
        filters: { ...state.filters, search: action.payload },
      };

    default:
      return state;
  }
};

export default rootReducer;
