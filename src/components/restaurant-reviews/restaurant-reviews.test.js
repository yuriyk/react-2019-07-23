import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantReviews from "./restaurant-reviews";
import { restaurants } from "../../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("restaurant reviews list", function() {
  test("should show reviews", function() {
    const wrapper = mount(<RestaurantReviews restaurant={restaurants[0]} />);
    expect(wrapper.find('li[data-autoid="REVIEW_ITEM"]').length).toEqual(2);
  });
});
