export const SAVE_TODO = "SAVE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export const completeTodo = () => {
  return { type: COMPLETE_TODO };
};

export const saveTodo = todo => {
  return { type: SAVE_TODO, todo };
};
