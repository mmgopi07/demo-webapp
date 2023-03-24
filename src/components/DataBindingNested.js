export default function DatabindingNested() {
  var menu = [
    {
      Category: "Elctronics",
      Products: ["Tv", "Fridge", "AC", "Washing Machine", "Fan"],
    },
    {
      Category: "Mens Wear",
      Products: ["Shirt", "Pant", "Kurtha", "t-shirt", "Vest", "Cap"],
    },
  ];

  return (
    <div className="container">
      <h1>Menu</h1>
      <ol>
        {menu.map((item) => (
          <li key={item}>
            {item.Category}

            <ul>
              {item.Products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
