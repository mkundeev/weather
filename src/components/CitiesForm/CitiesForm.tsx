import React, { Dispatch } from "react";
import { CITIES } from "../../const/cities";
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
    <form>
      {Object.entries(CITIES).map(([city, value]) => (
        <div key={city}>
          <label htmlFor={city}>{city}</label>
          <input
            type="checkbox"
            id={city}
            value={value}
            onChange={handleChange}
            checked={cities.hasOwnProperty(city)}
          />
        </div>
      ))}
    </form>
  );
}
