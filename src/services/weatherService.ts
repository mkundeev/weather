import axios from "axios";

const URL = "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m";

export async function getWeather(
  cities: string[],
  date: { startDate: string; endDate: string }
) {
  const result = cities.map(async (city) => {
    const { startDate, endDate } = date;
    const result = await axios.get(
      `${URL}&${city}&start_date=${startDate}&end_date=${endDate}`
    );
    return result.data;
  });
  return Promise.all(result);
}
