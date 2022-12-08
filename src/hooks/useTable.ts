import { useState, useEffect } from "react";
import { IData } from "../components/types/types";
export const useTable = (data: IData[]) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const [tableData, setTableData] = useState(data);

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

  return { handleSortingChange, sortField, order, tableData };
};
