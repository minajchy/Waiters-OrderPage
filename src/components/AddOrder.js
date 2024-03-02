import React, { useState } from "react";

const AddOrder = (props) => {
  const [orderId, setOrderId] = useState("");
  const [choosePrice, setChoosePrice] = useState("");
  const [chooseDish, setChooseDish] = useState("");
  const [chooseTable, setChooseTable] = useState("");

  const submitbillHandler = (event) => {
    event.preventDefault();
    if (
      orderId.trim().length === 0 ||
      choosePrice.trim().length === 0 ||
      chooseDish.trim().length === 0 ||
      chooseTable.trim().length === 0
    ) {
      return;
    }
    props.onAddOrder(orderId, choosePrice, chooseDish, chooseTable);
    setOrderId("");
    setChoosePrice("");
    setChooseDish("");
    setChooseTable("");
  };

  const orderIdChangeHandler = (event) => {
    setOrderId(event.target.value);
  };

  const choosePriceChangeHandler = (event) => {
    setChoosePrice(event.target.value);
  };

  const chooseDishChangeHandler = (event) => {
    setChooseDish(event.target.value);
  };

  const chooseTableChangeHandler = (event) => {
    setChooseTable(event.target.value);
  };

  return (
    <div>
      <form onSubmit={submitbillHandler}>
        <label>Unique Order Id</label>
        <input
          id="orderid"
          type="number"
          value={orderId}
          onChange={orderIdChangeHandler}
        ></input>
        <label>Choose Price</label>
        <input
          id="price"
          type="number"
          value={choosePrice}
          onChange={choosePriceChangeHandler}
        ></input>
        <label>Choose Dish</label>
        <input
          id="dish"
          type="text"
          value={chooseDish}
          onChange={chooseDishChangeHandler}
        ></input>
        <label>Choose A Table</label>
        <select value={chooseTable} onChange={chooseTableChangeHandler}>
          <option value="">Select a Table</option>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
        <button type="submit">Add to bill</button>
      </form>
    </div>
  );
};

export default AddOrder;
