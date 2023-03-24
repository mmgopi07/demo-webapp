function SimpleDataBinding() {
  var product = {
    Model: "Samsung TV",
    Price: 15000,
    stock: true,
  };
  return (
    <div className="container">
      <h1>Product Details</h1>
      <dl>
        <dt>Name</dt>
        <dd>{product.Model}</dd>
        <dt>Price</dt>
        <dd>{product.Price}</dd>
        <dt>Stock</dt>
        <dd>{product.stock === true ? "Available" : "Out Of Stock"}</dd>
      </dl>
    </div>
  );
}

export default SimpleDataBinding;
