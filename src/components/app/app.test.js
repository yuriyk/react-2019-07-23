import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app";
import { restaurants } from "../../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("At starts", function() {
  it("should show all restaurants", function() {
    const wrapper = mount(<App restaurants={restaurants} />);
    expect(wrapper.find('li[data-autoid="RESTAURANT_ITEM"]').length).toEqual(4);
  });

  describe("toggle menu button", function() {
    it("should show/hide menu only for one restaurant after click on Open/Close menu", function() {
      const wrapper = mount(<App restaurants={restaurants} />);
      const id = restaurants[0].id;
      const btn = wrapper.find(`button[data-autoid="OPEN_MENU_ITEM_${id}"]`);

      btn.simulate("click");

      expect(wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).length).toBe(
        1
      );

      expect(btn.text()).toEqual("Close menu");
      btn.simulate("click");
      expect(wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).length).toBe(
        0
      );
    });
  });

  describe("when App get fetchData prop", function() {
    it("should call fetchData callback", function(done) {
      mount(<App restaurants={restaurants} fetchData={() => done()} />);
    });
  });
});
