import { COMPLETE_TODO, SAVE_TODO } from "../actions";

const COMPLETED_TEXT = "The button has been clicked";

export const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_TODO:
      return action.todo;
    case COMPLETE_TODO:
      return {
        ...state,
        completed: true,
        title: COMPLETED_TEXT
      };
    default:
      return state;
  }
};
