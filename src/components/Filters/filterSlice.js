import { SEARCH_TODO, STATUS_FILTER } from "../../redux/actionTypes";

const initialState = {
  search: "",
  status: "All",
  priority: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TODO:
      return {
        ...state,
        search: action.payload.toLowerCase(),
      };

    case STATUS_FILTER:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
