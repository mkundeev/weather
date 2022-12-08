import React, { useEffect, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import TableHeaderCell from "../TableHeaderCell";
import TableRow from "../TableRow";

interface IProps {
  data: {
    city: string;
    minTemp: number;
    maxTemp: number;
  }[];
}
export default function Table({ data }: IProps) {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const [tableData, setTableData] = useState(data);
  const tableHeader = ["city", "minTemp", "maxTemp"];

  const handleSorting = (
    sortField: keyof typeof data[0],
    sortOrder: string
  ) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
  const handleSortingChange = (e: React.MouseEvent<Element>) => {
    const sortOrder =
      e.currentTarget.id === sortField && order === "asc" ? "desc" : "asc";
    setSortField(e.currentTarget.id);
    setOrder(sortOrder);
    if (
      e.currentTarget.id === "city" ||
      e.currentTarget.id === "minTemp" ||
      e.currentTarget.id === "maxTemp"
    )
      handleSorting(e.currentTarget.id, sortOrder);
  };

  useEffect(() => setTableData(data), [data]);

  return (
    <>
      {data && (
        <table className="border-collapse table-border h-fit">
          <thead className="table-border bg-slate-900 text-orange-400">
            <tr className="table-border">
              {tableHeader.map((name) => (
                <TableHeaderCell
                  name={name}
                  onClick={handleSortingChange}
                  isAscend={name === sortField && order === "asc"}
                  key={name}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
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
