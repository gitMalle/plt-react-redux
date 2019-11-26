import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../store";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// configure enzyme for React v16
Enzyme.configure({ adapter: new Adapter() });

const wrapper = mount(
  <Provider store={store}>
    <App />
  </Provider>
);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

// test button for store state change
describe("button", () => {
  it("should update store", () => {
    // find button and title from DOM
    const btn = wrapper.find("button");
    const title = wrapper.find("h2");
    const expectedText = "The button has been clicked"
    btn.simulate("click");
    expect(title.text()).toEqual(expectedText);
    expect(store.getState().title).toEqual(expectedText);
    expect(store.getState().completed).toEqual(true);
  });
});
