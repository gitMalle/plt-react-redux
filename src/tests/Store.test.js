import { completeTodo, saveTodo, SAVE_TODO, COMPLETE_TODO } from "../actions";
import { todoReducer } from "../reducers";

// test if correct action types are returned
describe("actions", () => {
  it("should create an action to save todo", () => {
    const todo = {};
    const expectedAction = {
      type: SAVE_TODO,
      todo
    };
    expect(saveTodo(todo)).toEqual(expectedAction);
  });
  it("should create an action to complete todo", () => {
    const expectedAction = {
      type: COMPLETE_TODO
    };
    expect(completeTodo()).toEqual(expectedAction);
  });
});

// test if reducer returns correct state
describe("todo reducer", () => {
  it("should handle SAVE_TODO", () => {
    expect(
      todoReducer(
        {},
        { type: SAVE_TODO, todo: { title: "test", completed: false } }
      )
    ).toEqual({
      title: "test",
      completed: false
    });
  });
  it("should handle COMPLETE_TODO", () => {
    expect(
      todoReducer({ title: "test", completed: false }, { type: COMPLETE_TODO })
    ).toEqual({
      title: "The button has been clicked",
      completed: true
    });
  });
});
