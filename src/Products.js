import React from "react";
// import product from "./product";

export default function Products({ products }) {
  return (
    <div>
      <>
        {products.map((product, i) => (
          <product key={i} product={product} />
        ))}
      </>
    </div>
  );
}
