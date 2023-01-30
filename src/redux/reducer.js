import { ADD_TODO } from "./actionTypes";

const initialState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todos: [
    { id: 1, title: "Learn React", priority: "High", completed: true },
    { id: 2, title: "Learn Express", priority: "High", completed: false },
    { id: 3, title: "Learn Redux", priority: "Medium", completed: true },
    { id: 4, title: "Learn Firebase", priority: "Medium", completed: false },
    { id: 5, title: "Learn Networking", priority: "Low", completed: false },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    default:
      return state;
  }
};

export default rootReducer;
