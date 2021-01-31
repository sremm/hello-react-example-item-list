import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Item(props) {
  const [name, setName] = useState("Default Name");
  const [price, setPrice] = useState(99.99);
  return (
    <div className="item">
      <b>Name:</b>
      {props.name}
      <br />
      <b>Price:</b>
      {props.price}
    </div>
  );
}
function App() {
  return (
    <div>
      <Item name="Cheese" price="4.99" />
      <Item name="Bread" price="1.49" />
      <Item name="Ice cream" price="24" />
    </div>
  );
}

const el = <App />;
ReactDOM.render(el, document.getElementById("root"));
