import React, { useEffect, useState } from "react";
import OrderCard from "../components/OrderCard";
import api from "../helpers/api";
import useAlerts from "../hooks/useAlerts";

/**
 * Bag is a component that handles rendering the bag page for the website
 *
 * @return {HTML} the bag page for the desperate housewares website
 */
function Bag() {
  const { addAlert } = useAlerts();
  const orders = useState([
    {
      items: [
        {
          name: "Cute Kitty",
          size: "Tiny",
          price: 99,
          image: "http://placekitten.com/200/300",
        },
      ],
      name: "Sam Fletching",
      totalPrice: 99,
      orderDate: Date.now(),
      collected: false,
    },
  ])[0];

  useEffect(() => {
    api
      .post("/order/", {})
      .then((response) => {
        // TODO write what to do with response
      })
      .catch(() => {
        addAlert({ severity: "warning", message: "Something went wrong" });
      });
  }, []);

  return (
    <>
      <h1 className="mt-16 mb-10 text-center font-oswald text-5xl">
        Items On Hold
      </h1>
      <section className="grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {Array(10)
          .fill()
          .map(() => {
            return orders.map((order, index) => {
              return (
                <OrderCard
                  key={index}
                  index={index + 1}
                  shopperName={order.name}
                  date={order.orderDate}
                  items={order.items}
                  totalPrice={order.totalPrice}
                  collected={order.collected}
                />
              );
            });
          })}
      </section>
    </>
  );
}

export default Bag;
