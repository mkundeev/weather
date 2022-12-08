import { useState } from "react";
import { dateForQuery } from "../utils/dateForQuery";
export const useDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [queryDate, setQueryDate] = useState(dateForQuery(new Date()));

  const handleDate = (date: Date) => {
    setQueryDate(dateForQuery(date));
    setStartDate(date);
  };

  return { startDate, handleDate, queryDate };
};
