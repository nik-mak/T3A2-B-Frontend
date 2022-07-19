import React, { useContext, useEffect, useState } from "react";
import OrderCard from "../components/bag/OrderCard";
import api from "../helpers/api";
import useAlerts from "../hooks/useAlerts";
import dayjs from "dayjs";
import UserContext from "../contexts/user";
import SortByButton from "../components/SortByButton";
import { Pagination } from "@mui/material";

/**
 * Bag is a component that handles rendering the bag page for the website
 *
 * @return {HTML} the bag page for the desperate housewares website
 */
function Bag() {
  const filters = ["none", "pending", "collected"];
  const options = ["recent", "price(high - low)", "price(low - high)"];
  const { addAlert } = useAlerts();
  const [selectedSort, setSelectedSort] = useState(options[0]);
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState(filters[0]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const currentUser = useContext(UserContext)[0];

  // useEffect to call the API and set the pages and orders to be displayed on the bag page on mount or when page/filter/selectedSort state changes
  useEffect(() => {
    api
      .post(
        currentUser && ["staff", "admin"].includes(currentUser.role)
          ? "/order/store"
          : "/order",
        {
          page: page,
          amount: 2,
          sort: selectedSort,
          filter: filter,
        }
      )
      .then((response) => {
        setOrders(response.data.results);
        setPageCount(response.data.totalPages);
      })
      .catch(() => {
        addAlert({ severity: "warning", message: "Something went wrong" });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filter, selectedSort]);

  function handleFilter(value) {
    setFilter(value);
  }

  function handlePagination(e, value) {
    setPage(value);
  }

  function handleSort(value) {
    setSelectedSort(value);
  }

  return (
    <div>
      <h1 className="mb-10 pt-16 text-center font-oswald text-5xl">
        Items On Hold
      </h1>
      <div className="m-7 space-y-2">
        <SortByButton
          options={filters}
          onChange={handleFilter}
          selected={filter}
          setSelected={setFilter}
          label="Filter by: "
        />
        <SortByButton
          options={options}
          onChange={handleSort}
          selected={selectedSort}
          setSelected={setSelectedSort}
          label="Sort by: "
        />
      </div>
      {pageCount ? (
        <section className="m-4 grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {orders.map((order, index) => {
            return (
              <OrderCard
                key={index}
                index={order._id}
                shopperName={order.user ? order.user.name : currentUser.name}
                date={`${dayjs(order.createdAt).format(
                  "ddd DD/MM/YY hh:mm a"
                )}`}
                items={order.items}
                totalPrice={order.totalPrice}
                collected={order.collected}
              />
            );
          })}
        </section>
      ) : (
        <section className="pt-10">
          <h2 className="text-center font-oswald text-4xl">
            No orders are {`${filter}`}.
          </h2>
        </section>
      )}
      <Pagination
        count={pageCount}
        page={page}
        variant="outlined"
        className={`flex justify-center py-10 ${!pageCount ? "hidden" : ""} `}
        onChange={handlePagination}
      />
    </div>
  );
}

export default Bag;
