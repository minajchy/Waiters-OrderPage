import React from "react";
import OrderList from "./OrdersList";

const Tables = ({ enteredtableOrders, deleteOrderHandler }) => {
  return (
    <div>
      <h2>Orders</h2>
      <OrderList orders={[]} deleteOrderHandler={deleteOrderHandler}></OrderList>
      <h3>Table 1</h3>
      <OrderList
        orders={enteredtableOrders.table1}
        deleteOrderHandler={deleteOrderHandler}
      ></OrderList>
      <h3>Table 2</h3>
      <OrderList
        orders={enteredtableOrders.table2}
        deleteOrderHandler={deleteOrderHandler}
      ></OrderList>
      <h3>Table 3</h3>
      <OrderList
        orders={enteredtableOrders.table3}
        deleteOrderHandler={deleteOrderHandler}
      ></OrderList>
    </div>
  );
};
export default Tables;
