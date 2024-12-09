import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function HomePage() {
  const [initialState, setInitialState] = useState({
    name: "",
    email: "",
    number: "",
    products: [
      {
        productType: "",
        productName: "",
        productPrice: "",
        productQty: "",
        productTotal: "",
      },
    ],
    gradTotal: "",
  });

  const [formValidation, setFormValidation] = useState({
    name: "name is required",
    email: "email is required",
    number: "number is required",
    products: [
      {
        productType: "please select product type",
        productName: "please select product name",
        productPrice: "please enter product price",
        productQty: "please enter product quantity",
        productTotal: "please enter total price",
      },
    ],
    gradTotal: "please enter total price",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(initialState);
  };

  const onInpChang = function (e, index = 0) {
    if (e.target.name === "name") {
      let name = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        name,
      }));
    }

    if (e.target.name === "email") {
      let email = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        email,
      }));
    }

    if (e.target.name === "number") {
      let number = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        number,
      }));
    }

    if (e.target.name === "products[productType]") {
      console.log(initialState);

      let products = initialState.products;
      products[index]["productType"] = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        products: [...products],
      }));
    }

    if (e.target.name === "products[productType]") {
      console.log(initialState);

      let products = initialState.products;
      products[index]["productType"] = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        products: [...products],
      }));
    }

    if (e.target.name === "products[productName]") {
      console.log(initialState);

      let products = initialState.products;
      products[index]["productName"] = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        products: [...products],
      }));
    }

    if (e.target.name === "products[productPrice]") {
      console.log(initialState);

      let products = initialState.products;
      products[index]["productPrice"] = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        products: [...products],
      }));
    }
    if (e.target.name === "products[productQty]") {
      console.log(initialState);

      let products = initialState.products;
      products[index]["productQty"] = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        products: [...products],
      }));
    }
  };

  const onProductChange = function () {
    // simple fetch api
    // await fetch("https://fakestoreapi.com/products")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // axios fetch api
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="container">
      <h1>Form </h1>
      <form action="">
        <div className="row">
          <div className="inp-field col">
            <label className="d-block" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              onChange={onInpChang}
              value={initialState.name}
            />
          </div>
          <div className="inp-field col">
            <label className="d-block" htmlFor="email">
              Email
            </label>

            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              onChange={onInpChang}
              value={initialState.email}
            />
          </div>
          <div className="inp-field col">
            <label className="d-block" htmlFor="number">
              Number
            </label>
            <input
              type="text"
              name="number"
              id="number"
              placeholder="number"
              onChange={onInpChang}
              value={initialState.number}
            />
          </div>
        </div>

        <hr className="my-5" />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary d-block ">Add product</button>
        </div>
        <div className="product-sec">
          <div className="row my-4">
            <div className="inp-field col-3">
              <label htmlFor="products[productType]" className="d-block">
                Product type
              </label>
              <select
                name="products[productType]"
                id="products[productType]"
                className="form-select"
                onChange={onInpChang}
                value={initialState.products[0].productType}
              >
                <option value="asd">asd</option>
                <option value="qwe">qwe</option>
                <option value="xzc">xzc</option>
              </select>
            </div>
            <div className="inp-field col-3">
              <label htmlFor="products[productName]" className="d-block">
                Product name
              </label>
              <select
                name="products[productName]"
                id="products[productName]"
                className="form-select"
                onChange={onInpChang}
                value={initialState.products[0].productName}
              >
                <option value="pop">pop</option>
                <option value="lkj">lkj</option>
                <option value="mnb">mnb</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="inp-field col">
              <label className="d-block" htmlFor="products[productPrice]">
                Price
              </label>
              <input
                type="number"
                name="products[productPrice]"
                id="products[productPrice]"
                onChange={onInpChang}
                value={initialState.products[0].productPrice}
              />
            </div>
            <div className="inp-field col">
              <label className="d-block" htmlFor="products[productQty]">
                Qty
              </label>
              <input
                type="number"
                name="products[productQty]"
                id="products[productQty]"
                onChange={onInpChang}
                value={initialState.products[0].productQty}
              />
            </div>
            <div className="inp-field col">
              <label className="d-block" htmlFor="Total">
                Total
              </label>
              <input
                type="number"
                name="total"
                id="total"
                value={
                  initialState.products[0].productPrice *
                  initialState.products[0].productQty
                }
                disabled
              />
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary mt-5"
          type="submit"
          onClick={(e) => onSubmit(e)}
        >
          Submit
        </button>
      </form>
      {/* <button className="btn btn-primary" onClick={onSubmit}>
        Submite
      </button> */}
    </div>
  );
}
