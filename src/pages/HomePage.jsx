import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function HomePage() {
  let submitting = false;
  const [initialState, setInitialState] = useState({
    name: "",
    email: "",
    number: "",
    products: [],
  });

  const [formError, setFormErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    setFormErr(validateValue(initialState));
    // setSubmitting((prev) => true);
    submitting = true;
    submitForm();
  };

  const submitForm = () => {
    const allObjectsEmpty =
      formError?.products &&
      formError?.products?.every(
        (product) => Object.keys(product).length === 0
      );
    console.log(formError);

    if (submitting) {
      console.log("Form submitted successfully", initialState);
    } else {
      console.log("Form has errors", formError);
      // setSubmitting((prev) => false);
      submitting = false;
    }
  };

  const validateValue = (inputValues) => {
    let error = {};
    error.products = [];
    if (!inputValues.name) {
      error.name = "name is required";
    }
    if (!inputValues.email) {
      error.email = "name is required";
    }
    if (!inputValues.number) {
      error.number = "number is required";
    }
    if (!inputValues.products.length > 0) {
      error.products = "please add products";
    }
    for (let i = 0; i < inputValues.products.length; i++) {
      let productErr = {
        // productType: "",
        // productName: "",
        // productPrice: "",
        // productQty: "",
      };

      error.products.push(productErr);
      if (!inputValues.products[i].productType) {
        error.products[i]["productType"] = "please select product type";
      }
      if (!inputValues.products[i].productName) {
        error.products[i]["productName"] = "please enter product name";
      }
      if (!inputValues.products[i].productPrice) {
        error.products[i]["productPrice"] = "please enter product price";
      }
      if (!inputValues.products[i].productQty) {
        error.products[i]["productQty"] = "please enter product quantity";
      }
      // if (!inputValues.products[i].productTotal) {
      //   error.products[i].productTotal = "please enter total price";
      // }
    }

    // if (!inputValues.products.gradTotal) {
    //   error.products.gradTotal = "please enter total price";
    // }

    return error;
  };

  const onInpChang = function (e, index = 0) {
    if (e.target.name === "name") {
      let name = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        name,
      }));
      if (formError && formError.name) {
        setFormErr((prev) => {
          const { name, ...rest } = prev;
          return rest;
        });
      }
    }

    if (e.target.name === "email") {
      let email = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        email,
      }));
      if (formError && formError.email) {
        setFormErr((prev) => {
          const { email, ...rest } = prev;
          return rest;
        });
      }
    }

    if (e.target.name === "number") {
      let number = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        number,
      }));
      if (formError && formError.number) {
        setFormErr((prev) => {
          const { number, ...rest } = prev;
          return rest;
        });
      }
    }

    if (e.target.name === `products.[${index}].[productType]`) {
      let products = initialState.products;

      products[index]["productType"] = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        products: [...products],
      }));
      if (
        formError &&
        formError.products &&
        formError.products[index]["productType"]
      ) {
        let products = formError.products;
        delete products[index]["productType"];
        setFormErr((prev) => ({
          ...prev,
          products: [...products],
        }));
      }
    }

    if (e.target.name === `products.[${index}].[productName]`) {
      let products = initialState.products;
      products[index]["productName"] = e.target.value;
      setInitialState((prev) => ({
        ...prev,
        products: [...products],
      }));
      if (
        formError &&
        formError.products &&
        formError.products[index]["productName"]
      ) {
        let products = formError.products;
        delete products[index]["productName"];
        setFormErr((prev) => ({
          ...prev,
          products: [...products],
        }));
      }
    }

    if (e.target.name === `products.[${index}].[productPrice]`) {
      let products = initialState.products;
      products[index]["productPrice"] = e.target.value;
      if (
        products[index]["productPrice"] !== "" &&
        products[index]["productQty"] !== ""
      ) {
        products[index]["productTotal"] = `${
          products[index]["productPrice"] * products[index]["productQty"]
        }`;
      }
      setInitialState((prev) => ({
        ...prev,
        products: [...products],
      }));
      if (
        formError &&
        formError.products &&
        formError.products[index]["productPrice"]
      ) {
        let products = formError.products;
        delete products[index]["productPrice"];
        setFormErr((prev) => ({
          ...prev,
          products: [...products],
        }));
      }
    }
    if (e.target.name === `products.[${index}].[productQty]`) {
      let products = initialState.products;
      products[index]["productQty"] = e.target.value;
      if (
        products[index]["productPrice"] !== "" &&
        products[index]["productQty"] !== ""
      ) {
        products[index]["productTotal"] = `${
          products[index]["productPrice"] * products[index]["productQty"]
        }`;
      }
      setInitialState((prev) => ({
        ...prev,
        products: [...products],
      }));
      if (
        formError &&
        formError.products &&
        formError.products[index]["productQty"]
      ) {
        let products = formError.products;
        delete products[index]["productQty"];
        setFormErr((prev) => ({
          ...prev,
          products: [...products],
        }));
      }
    }
  };

  const addProductHandler = () => {
    let products = initialState.products;
    let length = products.length;

    setInitialState((prev) => ({
      ...prev,
      products: [
        ...products,
        {
          id: `${length + 1}`,
          productType: "",
          productName: "",
          productPrice: "",
          productQty: "",
          productTotal: "",
        },
      ],
    }));
  };

  const resetForm = () => {
    const resetData = resetValuesToEmptyString(initialState);
    setInitialState(resetData);
  };

  const resetValuesToEmptyString = (obj) => {
    if (Array.isArray(obj)) {
      // If it's an array, reset each item
      return obj.map((item) => resetValuesToEmptyString(item));
    } else if (typeof obj === "object" && obj !== null) {
      // If it's an object, reset each key-value pair
      const newObj = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = resetValuesToEmptyString(obj[key]);
        }
      }
      return newObj;
    } else {
      // If it's a primitive value, return an empty string
      return "";
    }
  };

  const removeProduct = (idx) => {
    let products = initialState.products;
    products.splice(idx, 1);
    setInitialState((prev) => ({
      ...prev,
      products: [...products],
    }));
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside the list, do nothing
    if (!destination) {
      return;
    }

    // If dropped in the same position, do nothing
    if (source.index === destination.index) {
      return;
    }

    const reorderedItems = Array.from(initialState.products);
    const [removed] = reorderedItems.splice(source.index, 1); // Remove item from source
    reorderedItems.splice(destination.index, 0, removed); // Insert item at destination
    setInitialState((prev) => ({
      ...prev,
      products: reorderedItems,
    }));
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
            {formError.name && (
              <p className="error text-danger">{formError.name}</p>
            )}
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
            {formError.email && (
              <p className="error text-danger">{formError.email}</p>
            )}
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
            {formError.number && (
              <p className="error text-danger">{formError.number}</p>
            )}
          </div>
        </div>

        <hr className="my-5" />
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary d-block"
            onClick={addProductHandler}
          >
            Add product
          </button>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ width: "100%", margin: "0 auto" }}
              >
                {initialState.products.map((product, idx) => (
                  <Draggable
                    key={product.id}
                    draggableId={product.id}
                    index={idx}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: "none",
                          padding: "10px",
                          margin: "5px 0",
                          backgroundColor: "#f0f0f0",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          ...provided.draggableProps.style,
                        }}
                      >
                        <div className="product-sec">
                          <button
                            type="button"
                            onClick={() => removeProduct(idx)}
                            className="btn btn-danger float-end"
                          >
                            close
                          </button>

                          <div className="row my-4">
                            <div className="inp-field col-3">
                              <label
                                htmlFor={`products.[${idx}].[productType]`}
                                className="d-block"
                              >
                                Product type
                              </label>
                              <select
                                name={`products.[${idx}].[productType]`}
                                id={`products.[${idx}].[productType]`}
                                className="form-select"
                                onChange={(e) => onInpChang(e, idx)}
                                value={initialState?.products[idx]?.productType}
                              >
                                <option value="asd">asd</option>
                                <option value="qwe">qwe</option>
                                <option value="xzc">xzc</option>
                              </select>
                              {formError.products
                                ? formError.products[idx]?.productType && (
                                    <p className="error text-danger">
                                      {formError.products[idx]?.productType}
                                    </p>
                                  )
                                : ""}
                            </div>
                            <div className="inp-field col-3">
                              <label
                                htmlFor={`products.[${idx}].[productName]`}
                                className="d-block"
                              >
                                Product name
                              </label>
                              <select
                                name={`products.[${idx}].[productName]`}
                                id={`products.[${idx}].[productName]`}
                                className="form-select"
                                onChange={(e) => onInpChang(e, idx)}
                                value={initialState.products[idx]?.productName}
                              >
                                <option value="pop">pop</option>
                                <option value="lkj">lkj</option>
                                <option value="mnb">mnb</option>
                              </select>

                              {formError.products
                                ? formError.products[idx]?.productName && (
                                    <p className="error text-danger">
                                      {formError.products[idx]?.productName}
                                    </p>
                                  )
                                : ""}
                            </div>
                          </div>

                          <div className="row">
                            <div className="inp-field col">
                              <label
                                className="d-block"
                                htmlFor={`products.[${idx}].[productPrice]`}
                              >
                                Price
                              </label>
                              <input
                                type="number"
                                name={`products.[${idx}].[productPrice]`}
                                id={`products.[${idx}].[productPrice]`}
                                onChange={(e) => onInpChang(e, idx)}
                                value={initialState.products[idx]?.productPrice}
                              />
                              {formError.products
                                ? formError.products[idx]?.productPrice && (
                                    <p className="error text-danger">
                                      {formError.products[idx]?.productPrice}
                                    </p>
                                  )
                                : ""}
                            </div>
                            <div className="inp-field col">
                              <label
                                className="d-block"
                                htmlFor={`products.[${idx}].[productQty]`}
                              >
                                Qty
                              </label>
                              <input
                                type="number"
                                name={`products.[${idx}].[productQty]`}
                                id={`products.[${idx}].[productQty]`}
                                onChange={(e) => onInpChang(e, idx)}
                                value={initialState.products[idx]?.productQty}
                              />
                              {formError.products
                                ? formError.products[idx]?.productQty && (
                                    <p className="error text-danger">
                                      {formError.products[idx]?.productQty}
                                    </p>
                                  )
                                : ""}
                            </div>

                            <div className="inp-field col">
                              <label
                                className="d-block"
                                htmlFor={`products.[${idx}].[productTotal]`}
                              >
                                Total
                              </label>
                              <input
                                type="number"
                                name={`products.[${idx}].[productTotal]`}
                                id={`products.[${idx}].[productTotal]`}
                                value={
                                  initialState.products[idx]?.productPrice *
                                  initialState.products[idx]?.productQty
                                }
                                disabled
                              />
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <button
          className="btn btn-primary mt-5"
          type="submit"
          onClick={(e) => onSubmit(e)}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-primary mt-5 mx-2"
          onClick={resetForm}
        >
          Reset
        </button>
      </form>
      {/* <button className="btn btn-primary" onClick={onSubmit}>
        Submite
      </button> */}
    </div>
  );
}
