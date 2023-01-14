import React from "react";
export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button
        className="btn btn-danger col-2"
        onClick={() => {
          props.resetquantity();
        }}
      >
        Reset
      </button>

      <div className="col-8 bg-black text-white text-center">
        {props.totalAmount}
      </div>
      <button className="btn btn-primary col-2 ">
        <a
          className="text-white  text-decoration-none"
          target="_blank"
          href="https://en.wikipedia.org/wiki/Total_harmonic_distortion"
        >
          Pay Now
        </a>
      </button>
    </div>
  );
}
