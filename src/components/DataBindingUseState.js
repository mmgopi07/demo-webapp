import { useState } from "react";

export default function () {
  const [procucts, setProduct] = useState([
    "Tv",
    "AC",
    "Fan",
    "Mixcy",
    "Grinder",
  ]);

  return (
    <div className="container">
      <h2>Products Details</h2>

      <ul>
        {procucts.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
}
