import React, { useEffect, useState } from "react";
import "./table.css";
// import data from "./data.json";
import Rate from "../rate/Rate";
import ProgressBar from "../progress-bar/ProgressBar";
import Modal from "../modal/Modal";
import Pagination from "../pagination/Pagination";
import axios from "axios";

const header = [
  "#",
  "Name",
  "Price",
  "24H",
  "7D",
  "Market Cap",
  "Volume(24H)",
  "Circulating Supply",
];
const align = {
  0: "center",
  1: "left",
  2: "right",
  3: "center",
  4: "right",
  5: "right",
  6: "right",
  7: "right",
};

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=24h%2C7d`
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        alert("Error fetching data");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            {header.map((item, index) => (
              <th
                key={index}
                style={{ textAlign: align[index] }}
                className={(index >= 4 || index == 0) && "dont-show-on-mobile"}
              >
                {item}
              </th>
            ))}
            <th className="dont-show-on-mobile"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              onClick={() => {
                setIsModalOpen(true);
                setModalData(item);
              }}
              style={{ cursor: "pointer" }}
            >
              <td>
                {" "}
                <img src="/images/star.svg" />
              </td>
              <td
                style={{ textAlign: "center" }}
                className="dont-show-on-mobile"
              >
                {(currentPage - 1) * 10 + index + 1}
              </td>
              <td style={{ textAlign: "left" }} >
                <div className="coin-name">
                <img src={item.image} className="coin-image" />
                <span className="coin-main-name">{item.name}</span>
                <span className="coin-symbol-name">{item.symbol}</span>
                </div>
              </td>
              <td className="price">
                $
                {item.current_price.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </td>
              <td className="day">
                <Rate
                  isIncreasing={
                    item.price_change_percentage_24h_in_currency > 0
                  }
                  value={item.price_change_percentage_24h_in_currency}
                  justifyContent={"center"}
                />
              </td>
              <td
                style={{ textAlign: "right" }}
                className="dont-show-on-mobile"
              >
                {" "}
                <Rate
                  isIncreasing={item.price_change_percentage_7d_in_currency > 0}
                  value={item.price_change_percentage_7d_in_currency}
                  justifyContent={"right"}
                />
              </td>
              <td
                style={{ textAlign: "right" }}
                className="dont-show-on-mobile"
              >
                $
                {item.market_cap.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </td>
              <td
                style={{ textAlign: "right" }}
                className="dont-show-on-mobile"
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>
                    $
                    {item.total_volume.toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <span style={{ color: "#768396" }}>
                    {item.high_24h.toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}{" "}
                    {item.symbol.toUpperCase()}
                  </span>
                </div>
              </td>
              <td
                className="dont-show-on-mobile"
                style={{
                  textAlign: "right",
                  // display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <div>
                  {item.circulating_supply.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  {item.symbol.toUpperCase()}
                </div>
                <ProgressBar
                  currentValue={item.circulating_supply}
                  maxValue={item.total_supply}
                />
              </td>
              <td
                style={{ paddingLeft: "30px" }}
                className="dont-show-on-mobile"
              >
                {" "}
                <img src="/images/tablemenu.svg" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="show-on-mobile">
      {isModalOpen && (
        <Modal modalData={modalData} setIsModalOpen={setIsModalOpen} />
      )}
      </div>
      <Pagination setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Table;
