import React, { useState } from "react";
import { useQuery } from "react-query";
import Table from "./components/Table";
import CitiesForm from "./components/CitiesForm";
import { serialiseWeatherData } from "./utils/serialiseWeatherData";
import { getWeather } from "./services/weatherService";
import { initialValue, CITIES } from "./const/cities";
function App() {
  const [cities, setCities] = useState<Partial<typeof CITIES>>(initialValue);
  let weatherData;
  const { data } = useQuery({
    queryKey: Object.values(cities),
    queryFn: () => getWeather(Object.values(cities)),
  });

  if (data) weatherData = serialiseWeatherData(data, Object.keys(cities));

  return (
    <div className="w-fit mx-auto px-4">
      {weatherData && <Table data={weatherData} />}
      <CitiesForm setCities={setCities} cities={cities} />
    </div>
  );
}

export default App;
