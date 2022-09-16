import React from "react";
import { statsDictionary } from "../services/statsService";

const TabStats = ({ stats }) => {
  return (
    <div>
      <table className="w-full">
        <tbody>
          {stats.map((item, index) => (
            <tr className="capitalize" key={index}>
              <td width="30%">{statsDictionary[item.stat.name]}</td>
              <td width="20%" className="text-center font-bold ">
                {item.base_stat}
              </td>
              <td>
                <div className="w-full bg-gray-200 h-1">
                  <div
                    className={`${
                      item.base_stat < 50 ? "bg-red-600" : "bg-green-600"
                    } h-full`}
                    style={{ width: `${item.base_stat}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabStats;
