import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantList from "./restaurants-list";
import { restaurants } from "../../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("restaurant list", function() {
  test("increase dish items", function() {
    const wrapper = mount(<RestaurantList restaurants={restaurants} />);
    const restId = restaurants[0].id;
    const menuBtn = wrapper.find(
      `button[data-autoid="OPEN_MENU_ITEM_${restId}"]`
    );

    menuBtn.simulate("click");

    const dishId = restaurants[0].menu[0].id;
    const incBtn = wrapper.find(
      `div[data-autoid="DISH_ITEM_${dishId}"] button[data-autoid="INCREASE_BTN"]`
    );
    expect(incBtn.length).toBe(1);

    incBtn.simulate("click");
    expect(
      wrapper.find(`span[data-autoid="AMOUNT_DISH_${dishId}"]`).text()
    ).toEqual("1");
  });
});
