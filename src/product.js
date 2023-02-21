import React from "react";

export default function product({ product }) {
  return (
    <div>
      <div>
        <dl className="grid w-full  gap-y-10 gap-x-8 ">
          <label>
            <div
              key={product.id}
              className="relative pl-20  bg-orange-50 rounded-lg text-gray-900 "
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div
                  className="absolute top-2 left-2 flex items-center justify-center rounded-lg Class
                    Properties"
                >
                  <div className="text-6xl">{product.title}</div>
                </div>
                {product.description}
                {/* <input
                type="checkbox"
                checked={todo.complete}
                className="place-content-end float-right right-4"
              /> */}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 pl-6">
                {product.price}
              </dd>
            </div>
          </label>
        </dl>
      </div>
    </div>
  );
}
