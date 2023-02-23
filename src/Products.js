import React from "react";
import Product from "./Product";

export default function Products({ products }) {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Electronic Shop
          </h2>
          <p>Click on product to view the details</p>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
