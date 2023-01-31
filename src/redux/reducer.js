import { combineReducers } from "redux";
import filterReducer from "../components/Filters/filterSlice";
import todoReducer from "../components/Todo/todoSlice";

const rootReducer = combineReducers({
  filters: filterReducer,
  todos: todoReducer,
});

export default rootReducer;
