import React, { useState, useEffect } from "react";
import "./date.css";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="sticky-tbl">
      <table className="tbl">
        <tbody>
          <tr>
            <td className="date_row" rowSpan={2} colSpan={2}>
              {date.getDate()}
            </td>
            <td className="month_row">
              {date.toLocaleString("en-us", { month: "short" })}
            </td>
            <td className="day_row" rowSpan={2}>
              {weekday[date.getUTCDay()]}
            </td>
          </tr>
          <tr>
            <td className="year_row">{date.getFullYear()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default DateTime;
