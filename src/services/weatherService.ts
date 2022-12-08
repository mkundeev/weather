import axios from "axios";
const URLtime =
  "https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&start_date=2022-12-07&end_date=2022-12-08&hourly=temperature_2m";

const URL = "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m";

export async function getWeather(cities: string[]) {
  const result = cities.map(async (city) => {
    const result = await axios.get(`${URL}&${city}`);
    return result.data;
  });
  return Promise.all(result);
}
