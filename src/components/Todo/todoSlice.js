import { ADD_TODO, COMPLETE_TODO } from "../../redux/actionTypes";

const initialState = [
  { id: 1, task: "Learn React", priority: "High", completed: true },
  { id: 2, task: "Learn Express", priority: "High", completed: false },
  { id: 3, task: "Learn Redux", priority: "Medium", completed: true },
  { id: 4, task: "Learn Firebase", priority: "Medium", completed: false },
  { id: 5, task: "Learn Networking", priority: "Low", completed: false },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case COMPLETE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    default:
      return state;
  }
};

export default todoReducer;
