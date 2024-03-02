import React, { useEffect, useState } from "react";
import AddOrder from "./components/AddOrder";
import Tables from "./components/Tables";

function App() {
  const [enteredOrderedList, setEnteredOrderList] = useState([]);
  const [enteredtableOrders, setTableOrders] = useState({
    table1: [],
    table2: [],
    table3: [],
  });

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders"));
    if (savedOrders) {
      setEnteredOrderList(savedOrders);
    }
  }, []);

  const saveOrdersOnLocalStorage = (enteredOrderedList) => {
    enteredOrderedList.forEach((order) => {
      localStorage.setItem(
        order.id,
        JSON.stringify({
          expenseamount: order.price,
          description: order.dish,
          category: order.table,
          ordered: order.id,
        })
      );
    });
    localStorage.removeItem("orders");
  };

  const addOrderHandler = (oId, pPrice, dDish, tTable) => {
    const newOrder = { id: oId, price: pPrice, dish: dDish, table: tTable };
    setEnteredOrderList((prevOrderList) => [...prevOrderList, newOrder]);
    setTableOrders((prevTableOrders) => ({
      ...prevTableOrders,
      [tTable]: [...prevTableOrders[tTable], newOrder],
    }));
    saveOrdersOnLocalStorage([...enteredOrderedList, newOrder]);
  };

  const deleteOrderHandler = (orderId, table) => {
    const updatedOrderedList = enteredOrderedList.filter(
      (order) => order.id !== orderId
    );
    setEnteredOrderList(updatedOrderedList);
    const updatedTableOrders = enteredtableOrders[table].filter(
      (order) => order.id !== orderId
    );
    setTableOrders((prevTableOrders) => ({
      ...prevTableOrders,
      [table]: updatedTableOrders,
    }));
    localStorage.removeItem(orderId);
  };

  return (
    <div>
      <AddOrder onAddOrder={addOrderHandler}></AddOrder>
      <Tables
        enteredtableOrders={enteredtableOrders}
        deleteOrderHandler={deleteOrderHandler}
      ></Tables>
    </div>
  );
}

export default App;
