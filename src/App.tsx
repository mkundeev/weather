import React, { useState } from "react";
import { useQuery } from "react-query";
import DatePicker from "react-datepicker";
import Table from "./components/Table";
import CitiesForm from "./components/CitiesForm";
import AddCitiesBtn from "./components/AddCitiesBtn";
import Loader from "./components/Loader";
import ErrorHandler from "./components/ErrorHandler";
import { serialiseWeatherData } from "./utils/serialiseWeatherData";
import { getWeather } from "./services/weatherService";
import { initialValue, CITIES } from "./const/cities";
import { useCitiesFormOpen } from "./hooks/useCitiesFormOpen";
import { useDatePicker } from "./hooks/useDatePicker";
import { AnimatePresence } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [cities, setCities] = useState<Partial<typeof CITIES>>(initialValue);
  const { isCitiesForm, handleOpen, ref } = useCitiesFormOpen();
  const { startDate, queryDate, handleDate } = useDatePicker();

  let weatherData;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [Object.values(cities), queryDate],
    queryFn: () => getWeather(Object.values(cities), queryDate),
  });

  if (data) weatherData = serialiseWeatherData(data, Object.keys(cities));

  return (
    <div className="bg-[url('./img/background.jpg')] h-screen bg-top bg-blue-400 bg-no-repeat bg-cover">
      <div className="w-fit mx-auto px-4 flex gap-24 pt-10">
        {weatherData && (
          <>
            <div className="w-40">
              <div className="mb-6" ref={ref}>
                <AddCitiesBtn onClick={handleOpen} isOpen={isCitiesForm} />
                <AnimatePresence
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  {isCitiesForm && (
                    <CitiesForm setCities={setCities} cities={cities} />
                  )}
                </AnimatePresence>
              </div>
              <DatePicker
                selected={startDate}
                onChange={handleDate}
                minDate={new Date()}
                className="table-border w-40 px-2 cursor-pointer"
              />
            </div>
            <Table data={weatherData} />
          </>
        )}
        {isLoading && <Loader />}
        {isError && <ErrorHandler error={error} />}
      </div>
    </div>
  );
}

export default App;
