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
      <td className="table-border px-2 capitalize bg-white">{data.city}</td>
      <td className="table-border px-2 text-center bg-white">{data.minTemp}</td>
      <td className="table-border px-2 text-center bg-white">{data.maxTemp}</td>
    </>
  );
}
