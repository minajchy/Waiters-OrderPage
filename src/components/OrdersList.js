import React from "react";

const OrderList = (props) => {
  const delelteOrderHandler = (orderId, table) => {
    props.deleteOrderHandler(orderId, table);
  };

  return (
    <div>
      <ul>
        {props.orders.map((order) => (
          <li key={order.id}>
            {order.price} - {order.table} - {order.dish}
            <button onClick={() => delelteOrderHandler(order.id, order.table)}>
              Delete Order
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
