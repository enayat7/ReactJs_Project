import React from "react";
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      productprice: 0,
    };
  }
  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productname, this.state.productprice);
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="InputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            name="productname"
            onChange={(e) => {
              this.setState({ productname: e.currentTarget.value });
            }}
            value={this.state.productname}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="Number"
            className="form-control"
            id="price"
            name="productprice"
            onChange={(e) => {
              this.setState({ productprice: Number(e.currentTarget.value) });
            }}
            value={this.state.productprice}
          />
        </div>
        <button type="submit" className="btn btn-primary col-3">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
