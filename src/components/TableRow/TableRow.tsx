import React from "react";
interface IProps {
  data: {
    city: string;
    minTemp: number;
    maxTemp: number;
  };
}
export default function TableRow({ data }: IProps) {
  return (
    <>
      <td className="table-border px-2 capitalize">{data.city}</td>
      <td className="table-border px-2">{data.minTemp}</td>
      <td className="table-border px-2">{data.maxTemp}</td>
    </>
  );
}
