import { useState, useEffect } from "react";

export default function Stock({ chosenStock }) {
  // const { stocks, myStocks, setMyStocks } = useStocksContext();
  console.log(chosenStock);
  const { name, symbol, lastPrice, change, high, low, open } = chosenStock;
  // console.log(name);

  return (
    <div className="stock">
      <table border={"5"}>
        <thead>
          <h1>{name}</h1>
        </thead>
        <tbody>
          <p>
            <span>Symbol: {symbol}</span>
          </p>
          <p>
            <span>Last Price: {lastPrice}</span>
          </p>
          <p>
            <span style={{ color: change < 0 ? "red" : "green" }}>
              Change: {change}
            </span>
          </p>
          <p>
            <span>High: {high}</span>
          </p>
          <p>
            <span>Low: {low}</span>
          </p>
          <p>
            <span>Open: {open}</span>
          </p>
        </tbody>
      </table>
    </div>
  );
}
