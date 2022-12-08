import React from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

interface IProps {
  onClick: () => void;
  isOpen: boolean;
}
export default function AddCitiesBtn({ onClick, isOpen }: IProps) {
  return (
    <div
      className="px-2 table-border cursor-pointer flex justify-between items-center bg-white"
      onClick={onClick}
    >
      <p>Add cities</p>
      {isOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
    </div>
  );
}
