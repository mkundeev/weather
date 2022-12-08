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
      <td className="table-border px-2 text-center">{data.minTemp}</td>
      <td className="table-border px-2 text-center">{data.maxTemp}</td>
    </>
  );
}
