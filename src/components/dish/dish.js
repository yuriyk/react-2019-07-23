import React from "react";
import { Card, Button } from "antd";
import { useCounter } from "../../custom-hooks/use-counter";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <Card
      bordered
      actions={[
        `£${props.price}`,
        <>
          <span
            data-autoid={`AMOUNT_DISH_${props.id}`}
            style={{ margin: "0 12px" }}
          >
            {amount}
          </span>
          <Button.Group>
            <Button
              onClick={decrease}
              type="primary"
              shape="circle"
              icon="minus"
              data-autoid="DECREASE_BTN"
            />
            <Button
              onClick={increase}
              type="primary"
              shape="circle"
              icon="plus"
              data-autoid="INCREASE_BTN"
            />
          </Button.Group>
        </>
      ]}
      data-autoid={`DISH_ITEM_${props.id}`}
    >
      <Card.Meta
        title={props.name}
        description={props.ingredients.join(", ")}
      />
    </Card>
  );
}

export default Dish;
