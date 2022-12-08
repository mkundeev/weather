import React from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

interface IProps {
  name: string;
  isAscend: boolean;
  onClick: (e: React.MouseEvent<Element>) => void;
}
export default function TableHeaderCell({ name, isAscend, onClick }: IProps) {
  return (
    <th className="table-border px-2 w-40" id={name} onClick={onClick}>
      <div className="flex justify-between items-center">
        <p className="capitalize">{name}</p>
        {isAscend ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </div>
    </th>
  );
}
