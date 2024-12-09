import { useEffect, useState } from "react";

export default function HomePage() {
  const [submitting, setSubmitting] = useState(false);
  const [addProduct, setAddProduct] = useState(2);
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

  useEffect(() => {
    console.log(addProduct);
  }, [addProduct]);

  const [formError, setFormErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    setFormErr(validateValue(initialState));
    setSubmitting(true);
    submitForm();
  };

  const submitForm = () => {
    if (Object.keys(formError).length === 0 && submitting) {
      console.log("Form submitted successfully");
    } else {
      console.log("Form has errors", formError);
      setSubmitting(false);
    }
  };

  const validateValue = (inputValues) => {
    let error = {};
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
      error.products = [{}];
      if (!inputValues.products[i].productType) {
        error.products[i].productType = "please select product type";
      }
      if (!inputValues.products[i].productName) {
        error.products[i].productName = "please enter product name";
      }
      if (!inputValues.products[i].productPrice) {
        error.products[i].productPrice = "please enter product price";
      }
      if (!inputValues.products[i].productQty) {
        error.products[i].productQty = "please enter product quantity";
      }
      if (!inputValues.products[i].productTotal) {
        error.products[i].productTotal = "please enter total price";
      }
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

    if (e.target.name === "products[productType]") {
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

    if (e.target.name === "products[productName]") {
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

    if (e.target.name === "products[productPrice]") {
      let products = initialState.products;
      products[index]["productPrice"] = e.target.value;
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
    if (e.target.name === "products[productQty]") {
      let products = initialState.products;
      products[index]["productQty"] = e.target.value;
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
    setAddProduct((prev) => prev + 1);
  };

  let ProductArray = [];
  // eslint-disable-next-line no-undef
  // _.times(2, (idx) => {
  //   ProductArray.push();
  // });

  function RepeatElement({ element, times }) {
    // Create an array with 'times' number of elements, each being the element
    const repeatedElements = Array(times).fill(element);

    return (
      <div>
        {repeatedElements.map((el, idx) => (
          <div key={idx}>{el}</div> // Render each element
        ))}
      </div>
    );
  }

  // const onProductChange = async function () {
  //   // simple fetch api
  //   await fetch("https://fakestoreapi.com/products")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   // axios fetch api
  //   // axios
  //   //   .get("https://fakestoreapi.com/products")
  //   //   .then((res) => {
  //   //     console.log(res.data);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  // };

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
          </div>
          {formError.number && (
            <p className="error text-danger">{formError.number}</p>
          )}
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

        <RepeatElement
          element={
            <div className="product-sec" key={idx}>
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
                    value={initialState.products[idx]?.productType}
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
                  <label htmlFor="products[productName]" className="d-block">
                    Product name
                  </label>
                  <select
                    name="products[productName]"
                    id="products[productName]"
                    className="form-select"
                    onChange={onInpChang}
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
                  <label className="d-block" htmlFor="products[productPrice]">
                    Price
                  </label>
                  <input
                    type="number"
                    name="products[productPrice]"
                    id="products[productPrice]"
                    onChange={onInpChang}
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
                  <label className="d-block" htmlFor="products[productQty]">
                    Qty
                  </label>
                  <input
                    type="number"
                    name="products[productQty]"
                    id="products[productQty]"
                    onChange={onInpChang}
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
                  <label className="d-block" htmlFor="Total">
                    Total
                  </label>
                  <input
                    type="number"
                    name="total"
                    id="total"
                    value={
                      initialState.products[idx]?.productPrice *
                      initialState.products[idx]?.productQty
                    }
                    disabled
                  />
                </div>
              </div>
            </div>
          }
          times={5}
        />
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
