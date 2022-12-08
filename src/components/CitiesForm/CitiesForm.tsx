import React, { Dispatch } from "react";
import { motion } from "framer-motion";
import { CITIES } from "../../const/cities";
import { dropIn } from "../../utils/citiesFormAnimation";

interface IProps {
  setCities: Dispatch<React.SetStateAction<Partial<typeof CITIES>>>;
  cities: Partial<typeof CITIES>;
}
export default function CitiesForm({ setCities, cities }: IProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCities((p) => ({ ...p, [e.target.id]: e.target.value }));
    } else {
      setCities((p) => {
        const newData = {
          ...p,
        };
        delete newData[e.target.id as keyof typeof newData];
        return newData;
      });
    }
  };

  return (
    <motion.form
      variants={dropIn}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", bounce: 0 }}
      exit="exit"
      className="absolute w-40 z-10 bg-white"
    >
      {Object.entries(CITIES).map(([city, value]) => (
        <div
          key={city}
          className="table-border flex justify-between items-center w-full px-2 relative "
        >
          <label htmlFor={city} className="capitalize">
            {city}
          </label>
          <input
            type="checkbox"
            id={city}
            value={value}
            onChange={handleChange}
            checked={cities.hasOwnProperty(city)}
            className="opacity-0 absolute inset-0 cursor-pointer"
          />
          <div className="bg-white border-2 rounded-md border-slate-500 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-slate-600">
            <svg
              className="fill-current hidden w-3 h-3 text-slate-900 pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#fb923c"
                  fillRule="nonzero"
                >
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      ))}
    </motion.form>
  );
}
