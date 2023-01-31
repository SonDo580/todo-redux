import { SEARCH_TODO } from "../../redux/actionTypes";

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

    default:
      return state;
  }
};

export default filterReducer;
