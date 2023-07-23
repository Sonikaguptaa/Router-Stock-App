import data from "../data";
import { useNavigate } from "react-router-dom";
import React from "react";

const Dashboard = ({ setChosenStock }) => {
  const navigate = useNavigate();
  function getData(item) {
    setChosenStock(item);
    navigate(`/stocks/${item.symbol}`);
  }
  return (
    <div>
      <h1>Most Active Stocks</h1>
      <table border={"5"}>
        <thead>
          <tr>
            <th>Company Name</th>
            {/* <th>Symbol</th> */}
            <th>Price</th>
            <th>Change</th>
            {/* <th style={{ color: "green", backgroundColor: "white" }}>High</th>
            <th style={{ color: "red", backgroundColor: "white" }}>Low</th>
            <th>open</th> */}
          </tr>
        </thead>

        <tbody>
          {data.map((item, idx) => {
            return (
              <tr key={idx} onClick={() => getData(item)}>
                <td>{item.name}</td>
                {/* <td>{item.symbol}</td> */}
                <td>{item.lastPrice}</td>
                <td
                  type="text"
                  style={{ color: item.change < 0 ? "red" : "green" }}
                >
                  {item.change}
                </td>
                {/* <td>{item.high}</td>
                <td>{item.low}</td>
                <td>{item.open}</td> */}
                {/* <td style={{ color: item < 0 ? "red" : "green" }}></td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
