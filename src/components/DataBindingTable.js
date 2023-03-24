export default function DataBindingTable() {
  const products = [
    { Name: "Samsung TV", Price: 25000 },
    { Name: "Nike Causuals", Price: 4500 },
  ];
  return (
    <>
      <div className="container">
        <h1>Products Table</h1>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.Name}</td>
                <td>{product.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
