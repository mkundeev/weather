import React from "react";

import TableRow from "../TableRow";

interface IProps {
  data: {
    city: string;
    minTemp: number;
    maxTemp: number;
  }[];
}
export default function Table({ data }: IProps) {
  return (
    <>
      {data && (
        <table className="border-collapse table-border h-fit">
          <thead className="table-border bg-slate-900 text-white">
            <tr className="table-border">
              <th className="table-border px-2 w-40">City</th>
              <th className="table-border px-2 w-40">MinTemp</th>
              <th className="table-border px-2 w-40">MaxTemp</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr className="table-border" key={data.city}>
                {data.minTemp && <TableRow data={data} />}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
