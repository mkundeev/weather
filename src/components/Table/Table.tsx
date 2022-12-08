import React from "react";
import { useTable } from "../../hooks/useTable";
import TableHeaderCell from "../TableHeaderCell";
import TableRow from "../TableRow";
import { IData } from "../types/types";
import { ThreeDots } from "react-loader-spinner";

interface IProps {
  data: IData[];
}
export default function Table({ data }: IProps) {
  const { handleSortingChange, sortField, order, tableData } = useTable(data);
  const tableHeader = ["city", "minTemp", "maxTemp"];

  return (
    <>
      {data && (
        <table className="border-collapse h-fit">
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
              <tr key={data.city}>
                {data.minTemp ? (
                  <TableRow data={data} />
                ) : (
                  <td colSpan={3}>
                    <div className="relative left-1/3 translate-x-1/2 w-fit">
                      <ThreeDots
                        height="40"
                        width="80"
                        radius="9"
                        color="grey"
                        visible={true}
                      />
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
