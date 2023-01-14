import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary"> ₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.increamentquantity(props.index);
              // console.log(props.product)
            }}
          >
            +
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.decreamentquantity(props.index);
              // console.log(props.product)
            }}
          >
            -
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.price * props.product.quantity}
      </div>
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.removeitems(props.index);
        }}
      >
        remove
      </button>
    </div>
  );
}
