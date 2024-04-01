import React from "react";
import { useTable, usePagination } from "react-table";
import "./table.css";

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
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "sno",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "24H",
        accessor: "24h",
      },
      {
        Header: "7D",
        accessor: "7d",
      },
      {
        Header: "Market Cap",
        accessor: "marketCap",
      },
      {
        Header: "Volume(24H)",
        accessor: "volume24h",
      },
      {
        Header: "Circulating Supply",
        accessor: "circulatingSupply",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        sno: 1,
        name: "Bitcoin",
        price: "$50,000",
        "24h": "+5%",
        "7d": "+10%",
        marketCap: "$1 trillion",
        volume24h: "$100 billion",
        circulatingSupply: "18 million",
      },
      {
        sno: 2,
        name: "Ethereum",
        price: "$3,500",
        "24h": "+3%",
        "7d": "+8%",
        marketCap: "$400 billion",
        volume24h: "$50 billion",
        circulatingSupply: "120 million",
      },
      {
        sno: 3,
        name: "Cardano",
        price: "$2.50",
        "24h": "+2%",
        "7d": "+6%",
        marketCap: "$80 billion",
        volume24h: "$10 billion",
        circulatingSupply: "32 billion",
      },
      {
        sno: 4,
        name: "Binance Coin",
        price: "$400",
        "24h": "+4%",
        "7d": "+12%",
        marketCap: "$60 billion",
        volume24h: "$5 billion",
        circulatingSupply: "150 million",
      },
      {
        sno: 5,
        name: "XRP",
        price: "$1.20",
        "24h": "+1%",
        "7d": "+4%",
        marketCap: "$40 billion",
        volume24h: "$3 billion",
        circulatingSupply: "35 billion",
      },
      {
        sno: 6,
        name: "Dogecoin",
        price: "$0.30",
        "24h": "+2%",
        "7d": "+5%",
        marketCap: "$30 billion",
        volume24h: "$2 billion",
        circulatingSupply: "100 billion",
      },
      {
        sno: 7,
        name: "Polkadot",
        price: "$30",
        "24h": "+3%",
        "7d": "+7%",
        marketCap: "$20 billion",
        volume24h: "$1 billion",
        circulatingSupply: "10 million",
      },
      {
        sno: 8,
        name: "Uniswap",
        price: "$25",
        "24h": "+2%",
        "7d": "+6%",
        marketCap: "$15 billion",
        volume24h: "$500 million",
        circulatingSupply: "5 million",
      },
      {
        sno: 9,
        name: "Litecoin",
        price: "$150",
        "24h": "+1%",
        "7d": "+3%",
        marketCap: "$10 billion",
        volume24h: "$200 million",
        circulatingSupply: "50 million",
      },
      {
        sno: 10,
        name: "Chainlink",
        price: "$30",
        "24h": "+2%",
        "7d": "+4%",
        marketCap: "$8 billion",
        volume24h: "$100 million",
        circulatingSupply: "20 million",
      },
      {
        sno: 11,
        name: "Stellar",
        price: "$0.40",
        "24h": "+1%",
        "7d": "+3%",
        marketCap: "$5 billion",
        volume24h: "$50 million",
        circulatingSupply: "30 billion",
      },
      {
        sno: 12,
        name: "VeChain",
        price: "$0.10",
        "24h": "+2%",
        "7d": "+5%",
        marketCap: "$3 billion",
        volume24h: "$30 million",
        circulatingSupply: "25 billion",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state: { pageIndex, pageSize },
    gotoPage, // new function for custom pagination
    pageCount, // new variable for custom pagination
    prepareRow,
  } = useTable({ columns, data, initialState: { pageSize: 2 } }, usePagination);

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} >
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  style={{ textAlign: align[index] }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, index) => (
                  <td
                    {...cell.getCellProps()}
                    style={{ textAlign: align[index]}}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{" "}
        <div>
          {/* Custom pagination */}
          <span>
            Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "50px" }}
            />
          </span>{" "}
          <span>
            | Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            {pageOptions.map((page, index) => (
              <button key={index} onClick={() => gotoPage(index)}>
                {index + 1}
              </button>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
