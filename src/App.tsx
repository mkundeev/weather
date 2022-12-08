import React, { useState } from "react";
import { useQuery } from "react-query";
import DatePicker from "react-datepicker";
import Table from "./components/Table";
import CitiesForm from "./components/CitiesForm";
import AddCitiesBtn from "./components/AddCitiesBtn";
import { serialiseWeatherData } from "./utils/serialiseWeatherData";
import { getWeather } from "./services/weatherService";
import { initialValue, CITIES } from "./const/cities";
import { useCitiesFormOpen } from "./hooks/useCitiesFormOpen";
import { useDatePicker } from "./hooks/useDatePicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [cities, setCities] = useState<Partial<typeof CITIES>>(initialValue);
  const { isCitiesForm, handleOpen, ref } = useCitiesFormOpen();
  const { startDate, queryDate, handleDate } = useDatePicker();

  let weatherData;
  const { data } = useQuery({
    queryKey: [Object.values(cities), queryDate],
    queryFn: () => getWeather(Object.values(cities), queryDate),
  });

  if (data) weatherData = serialiseWeatherData(data, Object.keys(cities));

  return (
    <div className="w-fit mx-auto px-4 flex gap-4 mt-10">
      <div className="w-40">
        <div className="mb-6" ref={ref}>
          <AddCitiesBtn onClick={handleOpen} isOpen={isCitiesForm} />
          {isCitiesForm && <CitiesForm setCities={setCities} cities={cities} />}
        </div>
        <DatePicker
          selected={startDate}
          onChange={handleDate}
          minDate={new Date()}
          className="table-border w-40 px-2 cursor-pointer"
        />
      </div>
      {weatherData && <Table data={weatherData} />}
    </div>
  );
}

export default App;
