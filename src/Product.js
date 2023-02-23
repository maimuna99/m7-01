import React from "react";

export default function product({product}) {
  return (
    <div>
      <div
        onClick={() => alert(`${product.title}`)}
        key={product.id}
        product={product}
        className="group relative"
      >
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <p className="text-sm font-medium text-gray-900">
            Product Name: {product.title}
          </p>
          <br />
        </div>
        <div className="mt-4 flex justify-between">
          <p className="mt-1 text-sm text-gray-500">
            Product Description: {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
